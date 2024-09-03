import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import '../addBooks/adbook.css';

export default function BasketBuy({ basketData }) {
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
                alert("Receipt generated successfully!");
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
                        />
                        <TextField 
                            id="buyer-phone" 
                            label="Buyer Phone" 
                            variant="outlined" 
                            name='phone' 
                            type='number' 
                            className='input' 
                            onChange={onInputChange}
                        />
                    </span>
       
                    {form.books.map((book, idx) => (
                        <div key={book.bookId} className="book-details">
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
                                />
                            </span>
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
                        </div>
                    ))}
                    <TextField 
                        id="purchase-date" 
                        label="Purchase Date" 
                        variant="outlined" 
                        name='date' 
                        type='date' 
                        className='input' 
                        onChange={onInputChange}
                    />
       
                    <button type="submit">Get receipt</button>
                </form>
            </div>
        </>
    )
}
