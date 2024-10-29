import React, { useState } from 'react';
import Asset from './Asset';
import Summary from './Summary';

function Calculator() {
  const [assets, setAssets] = useState({
    goldPrice: 0,
    cash: 0,
    bank: 0,
    gold: 0,
    silver: 0,
    invest: 0,
    business: 0,
    acceptable: 0,
    debt: 0,
  });

  const handleAssetChange = (id, value) => {
    setAssets((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className='flex flex-col items-center lg:w-1/2 mx-auto'>
      <h1 className="text-3xl font-bold text-gray-800 my-4 text-center">যাকাত ক্যালকুলেটর</h1>
      <Asset id='goldPrice' fieldName='এক তোলা/ ভরি স্বর্ণের বর্তমান মূল্য ' onChange={handleAssetChange} />
      <hr className="my-4 border-gray-300 w-full" />
      <h4 className="text-lg text-gray-600 my-4 text-center">
        উপরে আপনার এলাকার বর্তমান স্বর্ণের মূল্য লিখে নিচে আপনার যাবতীয় সম্পদের তথ্য দিন।
        সব ধরনের তথ্য দেয়ার পর যাকাত হিসাব করুন নামক বাটনে ক্লিক করুন।
      </h4>
      <Asset id='cash' fieldName='ক্যাশ টাকা' onChange={handleAssetChange} />
      <Asset id='bank' fieldName='ব্যাংকের টাকা' onChange={handleAssetChange} />
      <Asset id='gold' fieldName='সোনা' onChange={handleAssetChange} />
      <Asset id='silver' fieldName='রুপা' onChange={handleAssetChange} />
      <Asset id='invest' fieldName='বিনিয়োগ' onChange={handleAssetChange} />
      <Asset id='business' fieldName='ব্যবসায় পণ্য' onChange={handleAssetChange} />
      <Asset id='acceptable' fieldName='প্রাপ্য ঋণ' onChange={handleAssetChange} />
      <Asset id='debt' fieldName='প্রদেয় ঋণ' onChange={handleAssetChange} />
      <Summary assets={assets} />
    </div>
  );
}

export default Calculator;
