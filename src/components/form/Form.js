import React, { useState } from 'react';
import Mainform from './Mainform';

const Form = () => {
  const [activeTab, setActiveTab] = useState('Company Details');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
    <div className="text-sm font-medium pt-4 text-black border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <h1 className='text-black'>Customer Creation</h1>
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <a
            href="/"
            className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === 'Company Details' ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : ''}`}
            onClick={() => handleTabClick('Company Details')}
          >
            Company Details
          </a>
        </li>
        <li className="me-2">
          <a
            href="/"
            className={`inline-block p-4 ${activeTab === 'Billing & Shipping Details' ? 'text-blue-600 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500' : 'border-b-2 border-transparent'} `}
            onClick={() => handleTabClick('Billing & Shipping Details')}
            aria-current={activeTab === 'Billing & Shipping Details' ? 'page' : undefined}
          >
            Billing & Shipping Details
          </a>
        </li>
        <li className="me-2">
          <a
            href="/"
            className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === 'KYC Documents' ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : ''}`}
            onClick={() => handleTabClick('KYC Documents')}
          >
            KYC Documents
          </a>
        </li>
      </ul>
    </div>
    <Mainform/>
    </div>

  );
};

export default Form;
