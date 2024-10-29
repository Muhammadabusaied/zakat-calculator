import React, { useState } from 'react';

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

    // Calculate total assets and eligible Zakat amount
    const totalAsset = cash + bank + gold + silver + invest + business + acceptable;
    const zakatEligibleAsset = totalAsset - debt;

    // Calculate Zakat if eligible
    if (goldPrice * 7.5 <= totalAsset) {
      setTotal(zakatEligibleAsset / 40); // Zakat is 2.5% of eligible assets
    } else {
      setTotal(0);
    }
  };

  return (
    <div>
      <div onClick={sumAsset} className="container d-flex justify-content-end">
        <button id='calculate' type="button" className="btn btn-primary">যাকাত হিসাব করুন</button>
      </div>
      <h1 id='noForoj'>
        প্রদানকৃত তথ্য অনুযায়ী আপনাকে {total > 0 ? `${total} টাকা যাকাত দিতে হবে।` : 'আপনার উপর যাকাত ফরজ নয়।'}
      </h1>
    </div>
  );
}

export default Summary;
