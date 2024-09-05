import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import '../addBooks/adbook.css';
import {  useNavigate } from 'react-router-dom';
import { generateReceipt } from '../sellbooks/receipt';

export default function BasketBuy({ basketData }) {
    const navigate=useNavigate()
    const [form, setForm] = useState({
        name: '',
        phone: '',
        date: '',
        books: []
    });

    useEffect(() => {
        if (basketData && basketData.length > 0) {
            const initialBooks = basketData.map((book) => ({
                bookId: book._id,
                title: book.title,
                stock: 0, // default value, to be filled by the user
                price: book.price,
            }));
            setForm(prevForm => ({
                ...prevForm,
                books: initialBooks
            }));
        }
    }, [basketData]);

    const onInputChange = (event, bookIndex = null) => {
        const { name, value } = event.target;

        if (bookIndex !== null) {
            setForm(prevForm => {
                const updatedBooks = [...prevForm.books];
                updatedBooks[bookIndex][name] = value;
                if (name === 'stock') {
                    updatedBooks[bookIndex].price = basketData[bookIndex].price * value;
                }
                return { ...prevForm, books: updatedBooks };
            });
        } else {
            setForm(prevForm => ({ ...prevForm, [name]: value }));
        }
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/books/sell", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (response.ok) {
                // alert("Receipt generated successfully!");
                // console.log(form)
                const  sell=({
                    name:form.name,
                    phone:form.phone,
                    date:new Date(),
                    bookdata:form.books
                })
                generateReceipt(sell)
                // console.log(sell)
                navigate("/receipts")
                
            } else {
                alert("Problem in generating the receipt");
            }
        } catch (err) {
            console.log(err);
            alert("Something went wrong.");
        }
    };

    return (
        <>
            <div className='addBookform'>
                <form onSubmit={onFormSubmit}>
                    <span>
                        <TextField 
                            id="buyer-name" 
                            label="Buyer Name" 
                            variant="outlined" 
                            name='name' 
                            className='input' 
                            onChange={onInputChange}
                            required
                        />
                        <TextField 
                            id="buyer-phone" 
                            label="Buyer Phone" 
                            variant="outlined" 
                            name='phone' 
                            type='number' 
                            className='input' 
                            onChange={onInputChange}
                            required
                        />
                    </span>
       
                    {form.books.map((book, idx) => (
                        <div key={book.bookId} className="book-details">
                             <TextField 
                                id={`bookname-${idx}`} 
                                label="Book Name" 
                                variant="outlined" 
                                name="bookname" 
                                type='text' 
                                className='input' 
                                value={book.title} 
                                disabled 
                                focused 
                            />
                            <span>
                                <TextField 
                                    id={`price-${idx}`} 
                                    label="Price" 
                                    variant="outlined" 
                                    name="price" 
                                    type='number' 
                                    className='input' 
                                    value={book.price} 
                                    disabled 
                                    focused 
                                />
                                <TextField 
                                    id={`stock-${idx}`} 
                                    label="Stock" 
                                    variant="outlined" 
                                    name="stock" 
                                    type='number' 
                                    className='input' 
                                    onChange={(event) => onInputChange(event, idx)}
                                    required
                                />
                            </span>
                           
                        </div>
                    ))}
       
                    <button type="submit">Get receipt</button>
                </form>
            </div>
        </>
    )
}
