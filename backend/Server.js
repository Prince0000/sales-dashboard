const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let products = [
    { id: 1, name: 'Apple iPhone 14', category: 'Smartphones', quantitySold: 100, salesAmount: 99900, salesDate: '2024-08-13' },
    { id: 2, name: 'Samsung Galaxy S23', category: 'Smartphones', quantitySold: 150, salesAmount: 112500, salesDate: '2024-08-13' },
    { id: 3, name: 'Sony WH-1000XM4', category: 'Headphones', quantitySold: 200, salesAmount: 70000, salesDate: '2024-08-13' },
    { id: 4, name: 'Dell XPS 13', category: 'Laptops', quantitySold: 120, salesAmount: 144000, salesDate: '2024-08-14' },
    { id: 5, name: 'Apple MacBook Pro', category: 'Laptops', quantitySold: 80, salesAmount: 192000, salesDate: '2024-08-14' },
    { id: 6, name: 'Bose QuietComfort 35', category: 'Headphones', quantitySold: 90, salesAmount: 54000, salesDate: '2024-08-14' },
    { id: 7, name: 'Google Pixel 7', category: 'Smartphones', quantitySold: 130, salesAmount: 84500, salesDate: '2024-08-13' },
    { id: 8, name: 'HP Spectre x360', category: 'Laptops', quantitySold: 110, salesAmount: 165000, salesDate: '2024-08-14' },
    { id: 9, name: 'Sony PlayStation 5', category: 'Gaming Consoles', quantitySold: 140, salesAmount: 56000, salesDate: '2024-08-13' },
    { id: 10, name: 'Microsoft Xbox Series X', category: 'Gaming Consoles', quantitySold: 170, salesAmount: 85000, salesDate: '2024-08-13' },
    { id: 11, name: 'Apple AirPods Pro', category: 'Headphones', quantitySold: 160, salesAmount: 48000, salesDate: '2024-08-13' },
    { id: 12, name: 'Lenovo ThinkPad X1', category: 'Laptops', quantitySold: 180, salesAmount: 216000, salesDate: '2024-08-14' },
    { id: 13, name: 'Nintendo Switch', category: 'Gaming Consoles', quantitySold: 190, salesAmount: 57000, salesDate: '2024-08-13' },
    { id: 14, name: 'Asus ROG Zephyrus', category: 'Laptops', quantitySold: 210, salesAmount: 252000, salesDate: '2024-08-14' },
    { id: 15, name: 'Beats Studio3', category: 'Headphones', quantitySold: 220, salesAmount: 66000, salesDate: '2024-08-14' },
    { id: 16, name: 'Apple iPad Pro', category: 'Tablets', quantitySold: 230, salesAmount: 184000, salesDate: '2024-08-13' },
    { id: 17, name: 'Samsung Galaxy Tab S8', category: 'Tablets', quantitySold: 240, salesAmount: 192000, salesDate: '2024-08-13' },
    { id: 18, name: 'Amazon Kindle Paperwhite', category: 'E-Readers', quantitySold: 250, salesAmount: 37500, salesDate: '2024-08-13' },
    { id: 19, name: 'Apple Watch Series 8', category: 'Smartwatches', quantitySold: 260, salesAmount: 104000, salesDate: '2024-08-14' },
    { id: 20, name: 'Samsung Galaxy Watch 5', category: 'Smartwatches', quantitySold: 270, salesAmount: 94500, salesDate: '2024-08-14' },
    { id: 21, name: 'Apple MacBook Air', category: 'Laptops', quantitySold: 300, salesAmount: 300000, salesDate: '2024-08-15' },
    { id: 22, name: 'Sony Bravia 55" OLED TV', category: 'Televisions', quantitySold: 80, salesAmount: 160000, salesDate: '2024-08-15' },
    { id: 23, name: 'Samsung Galaxy Buds Pro', category: 'Headphones', quantitySold: 90, salesAmount: 18000, salesDate: '2024-08-15' },
    { id: 24, name: 'Microsoft Surface Pro 9', category: 'Tablets', quantitySold: 95, salesAmount: 95000, salesDate: '2024-08-15' },
    { id: 25, name: 'Canon EOS R6', category: 'Cameras', quantitySold: 45, salesAmount: 135000, salesDate: '2024-08-15' },
    { id: 26, name: 'Nikon Z6 II', category: 'Cameras', quantitySold: 40, salesAmount: 120000, salesDate: '2024-08-15' },
    { id: 27, name: 'DJI Mavic Air 2', category: 'Drones', quantitySold: 50, salesAmount: 50000, salesDate: '2024-08-15' },
    { id: 28, name: 'GoPro Hero 11', category: 'Cameras', quantitySold: 60, salesAmount: 30000, salesDate: '2024-08-15' },
    { id: 29, name: 'Apple iMac 24"', category: 'Desktops', quantitySold: 70, salesAmount: 98000, salesDate: '2024-08-15' },
    { id: 30, name: 'Logitech MX Master 3', category: 'Accessories', quantitySold: 150, salesAmount: 15000, salesDate: '2024-08-15' },
    { id: 31, name: 'Samsung Odyssey G9', category: 'Monitors', quantitySold: 25, salesAmount: 35000, salesDate: '2024-08-15' },
    { id: 32, name: 'Razer Blade 15', category: 'Laptops', quantitySold: 55, salesAmount: 165000, salesDate: '2024-08-15' },
    { id: 33, name: 'Asus ZenBook 14', category: 'Laptops', quantitySold: 100, salesAmount: 120000, salesDate: '2024-08-15' },
    { id: 34, name: 'Google Nest Hub', category: 'Smart Home', quantitySold: 130, salesAmount: 19500, salesDate: '2024-08-15' },
    { id: 35, name: 'Ring Video Doorbell', category: 'Smart Home', quantitySold: 120, salesAmount: 24000, salesDate: '2024-08-15' },
    { id: 36, name: 'Philips Hue Starter Kit', category: 'Smart Home', quantitySold: 140, salesAmount: 28000, salesDate: '2024-08-15' },
    { id: 37, name: 'Fitbit Charge 5', category: 'Smartwatches', quantitySold: 110, salesAmount: 16500, salesDate: '2024-08-15' },
    { id: 38, name: 'Garmin Forerunner 945', category: 'Smartwatches', quantitySold: 60, salesAmount: 36000, salesDate: '2024-08-15' },
    { id: 39, name: 'Amazon Echo Dot', category: 'Smart Home', quantitySold: 220, salesAmount: 22000, salesDate: '2024-08-15' },
    { id: 40, name: 'Sony A7 III', category: 'Cameras', quantitySold: 35, salesAmount: 70000, salesDate: '2024-08-15' },
    { id: 41, name: 'Bose SoundLink Revolve', category: 'Speakers', quantitySold: 200, salesAmount: 40000, salesDate: '2024-08-15' },
    { id: 42, name: 'Apple TV 4K', category: 'Streaming Devices', quantitySold: 170, salesAmount: 51000, salesDate: '2024-08-15' },
    { id: 43, name: 'Roku Ultra', category: 'Streaming Devices', quantitySold: 180, salesAmount: 36000, salesDate: '2024-08-15' },
    { id: 44, name: 'Google Chromecast', category: 'Streaming Devices', quantitySold: 160, salesAmount: 32000, salesDate: '2024-08-15' },
    { id: 45, name: 'TP-Link WiFi 6 Router', category: 'Networking', quantitySold: 140, salesAmount: 28000, salesDate: '2024-08-15' },
    { id: 46, name: 'Netgear Nighthawk Router', category: 'Networking', quantitySold: 130, salesAmount: 32500, salesDate: '2024-08-15' },
    { id: 47, name: 'Dyson V11 Vacuum', category: 'Home Appliances', quantitySold: 95, salesAmount: 76000, salesDate: '2024-08-15' },
    { id: 48, name: 'iRobot Roomba 980', category: 'Home Appliances', quantitySold: 90, salesAmount: 72000, salesDate: '2024-08-15' },
    { id: 49, name: 'Nest Learning Thermostat', category: 'Smart Home', quantitySold: 115, salesAmount: 23000, salesDate: '2024-08-15' },
    { id: 50, name: 'Arlo Pro 4 Security Camera', category: 'Smart Home', quantitySold: 85, salesAmount: 25500, salesDate: '2024-08-15' },

    { id: 51, name: 'Google Chromecast', category: 'Streaming Devices', quantitySold: 160, salesAmount: 30000, salesDate: '2024-08-14' },
    { id: 52, name: 'TP-Link WiFi 6 Router', category: 'Networking', quantitySold: 140, salesAmount: 28000, salesDate: '2024-08-14' },
    { id: 53, name: 'Netgear Nighthawk Router', category: 'Networking', quantitySold: 130, salesAmount: 32500, salesDate: '2024-08-14' },
    { id: 54, name: 'Dyson V11 Vacuum', category: 'Home Appliances', quantitySold: 95, salesAmount: 76000, salesDate: '2024-08-14' },
    { id: 55, name: 'iRobot Roomba 980', category: 'Home Appliances', quantitySold: 90, salesAmount: 72000, salesDate: '2024-08-14' },
    { id: 56, name: 'Nest Learning Thermostat', category: 'Smart Home', quantitySold: 115, salesAmount: 23000, salesDate: '2024-08-14' },
    { id: 57, name: 'Arlo Pro 4 Security Camera', category: 'Smart Home', quantitySold: 85, salesAmount: 25500, salesDate: '2024-08-14' },
    { id: 58, name: 'Arlo Pro 4 Security Camera', category: 'Smart Home', quantitySold: 85, salesAmount: 5500, salesDate: '2024-08-14' },
  ];
  

// Endpoint to get today's sales
app.get('/api/todays-sales', (req, res) => {
  const today = new Date().toISOString().split('T')[0]; 
  console.log(today);
  const todaysSales = products.filter(product => product.salesDate === today);
  res.json(todaysSales);
});

// Endpoint to compare sales between two dates
app.get('/api/sales-comparison', (req, res) => {
    const { date1, date2 } = req.query;
  
    if (!date1 || !date2) {
      return res.status(400).json({ error: 'Please provide both date1 and date2 in the query parameters' });
    }
  
    // Filter products for each date
    const salesDate1 = products.filter(product => product.salesDate === date1);
    const salesDate2 = products.filter(product => product.salesDate === date2);
  
    // Create a map for quick lookup
    const salesDate2Map = new Map(salesDate2.map(product => [product.name, product]));
  
    // Compare sales data
    let comparisonData = salesDate1.map(product1 => {
      const product2 = salesDate2Map.get(product1.name) || {};
      const date1Sales = product1.salesAmount || 0;
      const date2Sales = product2.salesAmount || 0;
      const difference = Math.abs(date2Sales - date1Sales);
  
      return {
        name: product1.name,
        date1Sales: date1Sales,
        date2Sales: date2Sales,
        difference: difference
      };
    });
  
    // Include products present only in date2
    let additionalData = salesDate2
      .filter(product2 => !salesDate1.some(p => p.name === product2.name))
      .map(product2 => ({
        name: product2.name,
        date1Sales: 0,
        date2Sales: product2.salesAmount,
        difference: product2.salesAmount
      }));
  
    // Merge both comparison data and additional data
    comparisonData = comparisonData.concat(additionalData);
  
    res.json(comparisonData);
  });
  
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
