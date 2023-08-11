import React from 'react';
import DataTable from 'react-data-table-component';

const DataTableComponent = ({ data }) => {
  const columns = [
    { name: 'Date', selector: 'date' },
    { name: 'Cases', selector: 'cases' },
    { name: 'Deaths', selector: 'deaths' },
    { name: 'Recovered', selector: 'recovered' },
  ];

  return (
    <>
    <br/>
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">ตาราง</h1>
      <br/>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
        <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  )
 
  
};

export default DataTableComponent;
