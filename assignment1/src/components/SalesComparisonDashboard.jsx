import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const SalesComparisonDashboard = () => {
    const [salesData, setSalesData] = useState([]);
    const [chartData, setChartData] = useState({});
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalSalesDate1, setTotalSalesDate1] = useState(0);
    const [totalSalesDate2, setTotalSalesDate2] = useState(0);

    const fetchComparisonData = async () => {
        if (!date1 || !date2) {
            setError('Please select both dates.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:5000/api/sales-comparison?date1=${date1}&date2=${date2}`);
            if (!response.ok) {
                throw new Error('Failed to fetch comparison data');
            }

            const data = await response.json();

            console.log('API Response:', data); 

            if (!Array.isArray(data)) {
                throw new Error('Data format is incorrect');
            }

            setSalesData(data);
            prepareChartData(data);
            calculateTotalSales(data);
        } catch (err) {
            setError(err.message);
            console.error(err); 
        } finally {
            setLoading(false);
        }
    };

    const prepareChartData = (data) => {
        if (!data || !Array.isArray(data) || data.length === 0) {
            setChartData({});
            setError('No data available to display.');
            return;
        }

        try {
            const productNames = data.map(item => item.name || 'Unknown Product');
            const date1Sales = data.map(item => item.date1Sales || 0);
            const date2Sales = data.map(item => item.date2Sales || 0);

            setChartData({
                labels: productNames,
                datasets: [
                    {
                        label: `Sales on ${date1}`,
                        data: date1Sales,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                    {
                        label: `Sales on ${date2}`,
                        data: date2Sales,
                        backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    },
                ],
            });
        } catch (err) {
            setError('Error processing chart data.');
            console.error('Chart Data Error:', err);
        }
    };

    const calculateTotalSales = (data) => {
        const total1 = data.reduce((sum, item) => sum + (item.date1Sales || 0), 0);
        const total2 = data.reduce((sum, item) => sum + (item.date2Sales || 0), 0);

        setTotalSalesDate1(total1);
        setTotalSalesDate2(total2);
    };

    const columnDefs = [
        { headerName: 'Product Name', field: 'name', sortable: true, filter: true },
        { headerName: 'Category', field: 'category', sortable: true, filter: true },
        { headerName: `Sales on ${date1}`, field: 'date1Sales', sortable: true },
        { headerName: `Sales on ${date2}`, field: 'date2Sales', sortable: true },
        { headerName: 'Difference', field: 'difference', sortable: true },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Sales Comparison</h2>

            {salesData.length > 0 && (
                <div className="mb-4 p-4 border rounded bg-gray-300">
                    <h3 className="text-xl font-bold mb-2">Sales Total Comparison</h3>
                    <p>Total Sales on {date1}: {totalSalesDate1.toFixed(2)}</p>
                    <p>Total Sales on {date2}: {totalSalesDate2.toFixed(2)}</p>
                    <p>Differance : {Math.abs(totalSalesDate1.toFixed(2) - totalSalesDate2.toFixed(2))}</p>
                    <p className="font-bold">
                        {totalSalesDate1 === totalSalesDate2
                            ? `Total Sales on ${date1} are the same for ${date2}`
                            : `Total Sales on ${date1} ${totalSalesDate1 > totalSalesDate2 ? 'are higher than' : 'are lower than'} ${date2}`}
                    </p>
                </div>
            )}

            <div className="flex mb-4">
                <input
                    type="date"
                    value={date1}
                    onChange={(e) => setDate1(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="date"
                    value={date2}
                    onChange={(e) => setDate2(e.target.value)}
                    className="border p-2"
                />
                <button
                    onClick={fetchComparisonData}
                    className="ml-2 bg-blue-500 text-white p-2 rounded"
                >
                    Compare
                </button>
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {chartData && chartData.labels && chartData.labels.length > 0 ? (
                        <Bar data={chartData} />
                    ) : (
                        <div>No data available for chart</div>
                    )}
                    <div className="ag-theme-alpine mt-4" style={{ height: '400px' }}>
                        <AgGridReact rowData={salesData} columnDefs={columnDefs} pagination={true} />
                    </div>
                </>
            )}
        </div>
    );
};

export default SalesComparisonDashboard;
