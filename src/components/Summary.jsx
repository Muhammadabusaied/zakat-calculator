import React, { useState } from 'react';
import Swal from 'sweetalert2';

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
        text: 'আপনি আপনার এলাকার স্বর্ণের মূল্য প্রদান করেন নি। এই এপে স্বর্ণের মূল্যের উপর যাকাতের হিসাব হয়। অনুগ্রহপূর্বক নির্দিষ্ট ইনপুটে স্বর্ণের মূল্য প্রদান করুন।',
        icon: 'error',
        confirmButtonText: 'ঠিক আছে',
      });
      return; // Stop further execution if goldPrice is missing
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

    // Show SweetAlert with the calculated Zakat message
    Swal.fire({
      title: 'যাকাত হিসাব',
      text: `প্রদানকৃত তথ্য অনুযায়ী আপনাকে ${calculatedZakat > 0 ? `${calculatedZakat.toFixed(2)} টাকা যাকাত দিতে হবে।` : 'আপনার উপর যাকাত ফরজ নয়।'}`,
      icon: 'success',
      confirmButtonText: 'ঠিক আছে',
    });
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
