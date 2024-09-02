import { jsPDF } from "jspdf";

export function generateReceipt(sell) {
    const doc = new jsPDF();

    // Add University Book Store name with larger font size and bold style
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("University Book Store", 105, 20, null, null, "center");

    // Add a subtitle with a slightly smaller font
    doc.setFontSize(16);
    doc.setFont("helvetica", "italic");
    doc.text("Receipt of Sale", 105, 30, null, null, "center");

    // Add a horizontal line below the title and subtitle
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);

    // Set default font size and font style for the content
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");

    // Add customer and book details with spacing
    const startY = 50;
    const lineHeight = 10;

    // Add name
    doc.setFont("helvetica", "bold");
    doc.text("Name:", 20, startY);
    doc.setFont("helvetica", "normal");
    doc.text(`${sell.name}`, 60, startY);

    // Add book name
    doc.setFont("helvetica", "bold");
    doc.text("Book Name:", 20, startY + lineHeight);
    doc.setFont("helvetica", "normal");
    doc.text(`${sell.bookname}`, 60, startY + lineHeight);

    // Add price
    doc.setFont("helvetica", "bold");
    doc.text("Total Price:", 20, startY + 2 * lineHeight);
    doc.setFont("helvetica", "normal");
    doc.text(`${sell.price} RS`, 60, startY + 2 * lineHeight);

    // Calculate and add price per book
    const pricePerBook = (sell.price / sell.stock).toFixed(2);
    doc.setFont("helvetica", "bold");
    doc.text("Price per Book:", 20, startY + 3 * lineHeight);
    doc.setFont("helvetica", "normal");
    doc.text(`${pricePerBook} RS`, 60, startY + 3 * lineHeight);

    // Add date
    doc.setFont("helvetica", "bold");
    doc.text("Date:", 20, startY + 4 * lineHeight);
    doc.setFont("helvetica", "normal");
    doc.text(`${sell.date}`, 60, startY + 4 * lineHeight);

    // Add stock sold
    doc.setFont("helvetica", "bold");
    doc.text("Stock Sold:", 20, startY + 5 * lineHeight);
    doc.setFont("helvetica", "normal");
    doc.text(`${sell.stock}`, 60, startY + 5 * lineHeight);

    // Add phone number
    doc.setFont("helvetica", "bold");
    doc.text("Phone:", 20, startY + 6 * lineHeight);
    doc.setFont("helvetica", "normal");
    doc.text(`${sell.phone}`, 60, startY + 6 * lineHeight);

    // Add a footer with a line and thank you note
    doc.setLineWidth(0.2);
    doc.line(20, 280, 190, 280);
    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.text("Thank you for your purchase from University Book Store!", 105, 290, null, null, "center");

    // Save the PDF with a filename
    doc.save(`receipt_${sell.name}.pdf`);
}
