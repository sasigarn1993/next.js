// components/CovidTable.js
import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Country',
    selector: 'country',
    sortable: true,
  },
  {
    name: 'Cases',
    selector: 'cases',
    sortable: true,
  },
  {
    name: 'Deaths',
    selector: 'deaths',
    sortable: true,
  },
  {
    name: 'Recovered',
    selector: 'recovered',
    sortable: true,
  },
];

const CovidTable = ({ data }) => {
  return <DataTable title="Covid-19 Data" columns={columns} data={data} />;
};

export default CovidTable;


