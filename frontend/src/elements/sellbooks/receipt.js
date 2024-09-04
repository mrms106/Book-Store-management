import { jsPDF } from "jspdf";

export function generateReceipt(sell) {
    const doc = new jsPDF();

    // Add seller information at the top
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("University Book Shop", 20, 20);
    doc.setFont("helvetica", "normal");
    doc.text("Address: 123 Book Street, Knowledge City", 20, 30);
    doc.text("Phone: (123) 456-7890", 20, 40);

    // Add a line separator
    doc.setLineWidth(0.5);
    doc.line(20, 45, 190, 45);

    // Add receipt title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Receipt of Sale", 105, 60, null, null, "center");

    // Add a horizontal line below the title
    doc.setLineWidth(0.5);
    doc.line(20, 65, 190, 65);

    // Set default font size and font style for the content
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");

    // Add buyer details
    const startY = 80;
    const lineHeight = 10;

    // Add buyer label
    doc.setFont("helvetica", "bold");
    doc.text("Buyer Information:", 20, startY);
    
    // Add name
    doc.setFont("helvetica", "bold");
    doc.text("Name:", 20, startY + lineHeight);
    doc.setFont("helvetica", "normal");
    doc.text(`${sell.name}`, 60, startY + lineHeight);

    // Add phone
    doc.setFont("helvetica", "bold");
    doc.text("Phone:", 20, startY + 2 * lineHeight);
    doc.setFont("helvetica", "normal");
    doc.text(`${sell.phone}`, 60, startY + 2 * lineHeight);

    // Add date
    doc.setFont("helvetica", "bold");
    doc.text("Date:", 20, startY + 3 * lineHeight);
    doc.setFont("helvetica", "normal");
    doc.text(`${sell.date}`, 60, startY + 3 * lineHeight);

    // Add a horizontal line below the buyer details
    doc.setLineWidth(0.5);
    doc.line(20, startY + 4 * lineHeight, 190, startY + 4 * lineHeight);

    // Add book details
    doc.setFont("helvetica", "bold");
    doc.text("Books Purchased:", 20, startY + 5 * lineHeight);

    let currentY = startY + 6 * lineHeight;
    const bookLineHeight = 10;

    let totalPrice = 0;
    let totalStock = 0;

    // Iterate through each book in the sellData
    sell.bookdata.forEach((book, index) => {
        doc.setFont("helvetica", "bold");
        doc.text(`Book ${index + 1}:`, 20, currentY);
        
        doc.setFont("helvetica", "normal");
        doc.text(`Name: ${book.bookname}`, 60, currentY);
        doc.text(`Price: ${book.price} RS`, 60, currentY + bookLineHeight);
        doc.text(`Stock: ${book.stock}`, 60, currentY + 2 * bookLineHeight);

        // Update totals
        totalPrice += book.price * book.stock;
        totalStock += book.stock;

        // Move to the next line for the next book
        currentY += 3 * bookLineHeight;
    });

    // Add total price
    doc.setFont("helvetica", "bold");
    doc.text("Total Price:", 20, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(`${totalPrice} RS`, 60, currentY);

    // Add total stock
    doc.setFont("helvetica", "bold");
    doc.text("Total Stock:", 20, currentY + lineHeight);
    doc.setFont("helvetica", "normal");
    doc.text(`${totalStock}`, 60, currentY + lineHeight);

    // Add a footer with a line and thank you note
    doc.setLineWidth(0.2);
    doc.line(20, currentY + 2 * lineHeight, 190, currentY + 2 * lineHeight);
    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.text("Thank you for your purchase from University Book Store!", 105, currentY + 3 * lineHeight, null, null, "center");

      // Generate the PDF as a Blob
    const pdfBlob = doc.output("blob");

    // Create a URL for the Blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Create an iframe to load the PDF
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "none";
    iframe.src = pdfUrl;

    // Append the iframe to the body
    document.body.appendChild(iframe);

    // Try to open the print dialog
    try {
        iframe.onload = function() {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
        };
    } catch (error) {
        // Print failed, fallback to download
        console.log(error,"pdf")
        document.body.removeChild(iframe);
        const downloadLink = document.createElement("a");
        downloadLink.href = pdfUrl;
        downloadLink.download = `receipt_${sell.name}.pdf`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
}
