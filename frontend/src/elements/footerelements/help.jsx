import FooterElement from "./footerelement"
export default function Help(){
    return(
        <>
        <FooterElement
  title={"Add New Book"}
  description={"Easily add new books to your inventory by entering the book's details like title, author, ISBN, and price."}
/>

<FooterElement
  title={"Update Book Information"}
  description={"Update details of books in your inventory, such as price, quantity, or description."}
/>

<FooterElement
  title={"Delete Book"}
  description={"Remove a book from your inventory. This action is permanent and cannot be undone."}
/>

<FooterElement
  title={"Sell Book"}
  description={"Complete sales transactions by selecting books, specifying quantities, and processing payments."}
/>

<FooterElement
  title={"Generate Receipt"}
  description={"Generate a printed or emailed receipt after completing a sale, including details of the transaction."}
/>

<FooterElement
  title={"Sales Report"}
  description={"View detailed reports on sales, top-selling books, and customer purchase history over selected date ranges."}
/>

        </>
    )
}