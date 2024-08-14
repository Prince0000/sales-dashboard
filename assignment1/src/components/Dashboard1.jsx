import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,    // Register PointElement here
  LineElement,     // Register LineElement here
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/todays-sales')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [{
      label: 'Sales Amount',
      data: data.map(item => item.salesAmount),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }]
  };

  return (
    <div>
      <h2>Today's Sales</h2>
      <Line data={chartData} />
      <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
        <AgGridReact
          rowData={data}
          columnDefs={[
            { headerName: 'Product', field: 'name' },
            { headerName: 'Category', field: 'category' },
            { headerName: 'Quantity Sold', field: 'quantitySold' },
            { headerName: 'Sales Amount', field: 'salesAmount' },
            { headerName: 'Sales Date', field: 'salesDate' }
          ]}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default Dashboard1;
