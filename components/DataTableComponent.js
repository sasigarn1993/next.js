// src/components/DataTableComponent.js
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

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

const DataTableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/countries')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return <DataTable title="Covid-19 Data" columns={columns} data={data} />;
};

export default DataTableComponent;
