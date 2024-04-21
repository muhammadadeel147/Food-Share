

import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './DonationList.css';

const DonationList = () => {
  const dummyData = [
    { id: 1, name: 'John Doe', quantity: 10, foodName: 'Canned Goods', country: 'USA' },
    { id: 2, name: 'Jane Smith', quantity: 5, foodName: 'Fresh Produce', country: 'Canada' },
    { id: 3, name: 'Alice Johnson', quantity: 8, foodName: 'Dry Grains', country: 'UK' },
    { id: 1, name: 'John Doe', quantity: 10, foodName: 'Canned Goods', country: 'USA' },
    { id: 2, name: 'Jane Smith', quantity: 5, foodName: 'Fresh Produce', country: 'Canada' },
    { id: 3, name: 'Alice Johnson', quantity: 8, foodName: 'Dry Grains', country: 'UK' },
    { id: 1, name: 'John Doe', quantity: 10, foodName: 'Canned Goods', country: 'USA' },
    { id: 2, name: 'Jane Smith', quantity: 5, foodName: 'Fresh Produce', country: 'Canada' },
    { id: 3, name: 'Alice Johnson', quantity: 8, foodName: 'Dry Grains', country: 'UK' },
   
  ];

  return (
    <div className="donation-list">
      <h2>Donation List</h2>
      <DataTable value={dummyData} className="p-datatable-sm">
        <Column field="id" header="ID" />
        <Column field="name" header="Name" />
        <Column field="quantity" header="Quantity" />
        <Column field="foodName" header="Food Name" />
        <Column field="country" header="Country" />
      </DataTable>
    </div>
  );
};

export default DonationList;
