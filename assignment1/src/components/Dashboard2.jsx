import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,    // Register PointElement here
  LineElement,   
  Title,
  Tooltip,
  Legend
);

const Dashboard2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/sales-comparison', {
      params: { date1: '2023-08-13', date2: '2023-08-14' }
    })
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Sales on 2023-08-13',
        data: data.map(item => item.date1Sales),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sales on 2023-08-14',
        data: data.map(item => item.date2Sales),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ]
  };

  return (
    <div>
      <h2>Sales Comparison</h2>
      <Bar data={chartData} />
      <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
        <AgGridReact
          rowData={data}
          columnDefs={[
            { headerName: 'Product', field: 'name' },
            { headerName: 'Category', field: 'category' },
            { headerName: 'Date 1 Sales', field: 'date1Sales' },
            { headerName: 'Date 2 Sales', field: 'date2Sales' },
            { headerName: 'Difference', field: 'difference' },
          ]}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default Dashboard2;
