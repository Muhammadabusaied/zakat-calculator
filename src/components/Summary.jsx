import React, { useState } from 'react';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import '@fontsource/noto-sans-bengali';

function Summary({ assets }) {
  const [total, setTotal] = useState(0);

  const sumAsset = () => {
    const {
      goldPrice,
      cash,
      bank,
      gold,
      silver,
      invest,
      business,
      acceptable,
      debt,
    } = assets;

    // Check if goldPrice is valid
    if (!goldPrice || isNaN(goldPrice)) {
      Swal.fire({
        title: 'ত্রুটি',
        text: 'আপনি আপনার এলাকার স্বর্ণের মূল্য প্রদান করেন নি। এই এপে স্বর্ণের মূল্যের উপর যাকাতের হিসাব হয়। অনুগ্রহপূর্বক নির্দিষ্ট ইনপুটে ঘরে স্বর্ণের মূল্য প্রদান করুন।',
        icon: 'error',
        confirmButtonText: 'ঠিক আছে',
      });
      return;
    }

    // Calculate total assets and eligible Zakat amount
    const totalAsset = cash + bank + gold + silver + invest + business + acceptable;
    const zakatEligibleAsset = totalAsset - debt;

    // Calculate Zakat if eligible
    let calculatedZakat;
    if (goldPrice * 7.5 <= totalAsset) {
      calculatedZakat = zakatEligibleAsset / 40; // Zakat is 2.5% of eligible assets
      setTotal(calculatedZakat);
    } else {
      calculatedZakat = 0;
      setTotal(0);
    }

    // Show SweetAlert with detailed calculation
    Swal.fire({
      title: 'যাকাতের সংক্ষিপ্ত বিবরণ',
      html: `
        <p><strong>মোট সম্পদ:</strong> ${totalAsset.toFixed(2)} টাকা</p>
        <p><strong>প্রদেয় ঋণ:</strong> ${debt.toFixed(2)} টাকা</p>
        <p><strong>যাকাতযোগ্য সম্পদ:</strong> ${zakatEligibleAsset.toFixed(2)} টাকা</p>
        <p><strong>যাকাতের পরিমাণ:</strong> ${calculatedZakat > 0 ? `${calculatedZakat.toFixed(2)} টাকা` : 'যাকাত ফরজ নয়।'}</p>
      `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Download PDF',
      cancelButtonText: 'ঠিক আছে',
      preConfirm: () => {
        // Trigger PDF download if the confirm button is clicked
        downloadPDF();
      },
    });
  };

  const downloadPDF = () => {
    const {
      cash = 0,
      bank = 0,
      gold = 0,
      silver = 0,
      invest = 0,
      business = 0,
      acceptable = 0,
      debt = 0,
    } = assets;

    const totalAsset = cash + bank + gold + silver + invest + business + acceptable;
    const zakatEligibleAsset = totalAsset - debt;
    const calculatedZakat = total > 0 ? total : 0; // Use the total state or 0

    const doc = new jsPDF();
    doc.setFont('NotoSansBengali', 'normal'); // Set Bengali font if needed
    doc.setFontSize(16);
    doc.setTextColor(40, 40, 40); // Dark gray color

    // Title
    doc.text('Zakat Calculation Summary', 20, 20);
    
    // Draw a line
    doc.setDrawColor(0, 0, 0); // Black color
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25); // Horizontal line

    // Change font size for sections
    doc.setFontSize(14);
    
    // Content
    doc.text(`Total Assets: ${totalAsset.toFixed(2)} BDT`, 20, 35);
    doc.text(`Debts Payable: ${debt.toFixed(2)} BDT`, 20, 45);
    doc.text(`Zakat-Eligible Assets: ${zakatEligibleAsset.toFixed(2)} BDT`, 20, 55);
    doc.text(`Zakat Amount (2.5%): ${calculatedZakat.toFixed(2)} BDT`, 20, 65);

    // Draw a line
    doc.line(20, 70, 190, 70); // Another horizontal line

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Lighter gray for footer
    doc.text('This document was created using programming. Please verify its accuracy by consulting a qualified scholar.', 20, 80);
    
    // Contact information
    doc.text('Contact the developer, ', 20, 85);
    
    // Add clickable name
    const name = 'Muhammad Abu Saied';
    const fbLink = 'https://www.facebook.com/muhammadabusaied1';
    const textWidth = doc.getTextWidth('Contact the developer, ');
    
    // Draw the name in blue color
    const nameX = 20 + textWidth; // Calculate X position for the name
    doc.setTextColor(0, 0, 255); // Set text color to blue
    doc.text(name, nameX, 85);
    
    // Make the name clickable
    const nameWidth = doc.getTextWidth(name);
    doc.link(nameX, 85 - 10, nameWidth, 10, { url: fbLink }); // Clickable area for the name

    doc.save('zakat-calculation.pdf');
};

  return (
    <div>
      <div onClick={sumAsset} className="container d-flex justify-content-end">
        <button id='calculate' type="button" className="btn btn-primary">যাকাত হিসাব করুন</button>
      </div>
    </div>
  );
}

export default Summary;
