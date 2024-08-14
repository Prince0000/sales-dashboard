import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Register the required components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TodaySalesDashboard = () => {
  const [salesData, setSalesData] = useState([]); 
  const [chartData, setChartData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/todays-sales');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSalesData(data);
        prepareChartData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  const prepareChartData = (data) => {
    if (!data || data.length === 0) {
      setChartData(null); 
      return;
    }

    const productNames = data.map((item) => item.name);
    const salesAmounts = data.map((item) => item.salesAmount);

    setChartData({
      labels: productNames,
      datasets: [
        {
          label: 'Sales Amount',
          data: salesAmounts,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    });
  };

  const columnDefs = [
    { headerName: 'Product Name', field: 'name' },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Quantity Sold', field: 'quantitySold' },
    { headerName: 'Sales Amount', field: 'salesAmount' },
    { headerName: 'Sales Date', field: 'salesDate' },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Today's Sales</h2>
      {chartData ? <Bar data={chartData} /> : <div>No data available for chart</div>}
      <div className="ag-theme-alpine mt-4" style={{ height: '400px' }}>
        <AgGridReact rowData={salesData} columnDefs={columnDefs} pagination={true} />
      </div>
    </div>
  );
};

export default TodaySalesDashboard;
