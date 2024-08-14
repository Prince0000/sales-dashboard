# Sales Dashboard

## Overview

The Sales Dashboard is a web application designed to visualize and compare sales data. It features:

- **Today's Sales Dashboard**: View and analyze sales data for the current day.
- **Sales Comparison Dashboard**: Compare sales data between two selected dates with charts and tables.

The application is built using React for the frontend and Express.js for the backend.

## Features

- **Today's Sales Dashboard**: Provides a summary of sales data for today, including charts and a detailed table.
- **Sales Comparison Dashboard**: Allows users to compare sales data between two dates, showcasing differences and trends.

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - Chart.js
  - Tailwind CSS
- **Backend**:
  - Express.js
  - Node.js

## Installation

### Prerequisites

- Node.js (14.x or later)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/Prince0000/sales-dashboard.git
cd sales-dashboard
```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

   The server will run on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../assignment1
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Get Today's Sales

- **Endpoint**: `GET /api/todays-sales`
- **Description**: Fetches sales data for the current day.

### Compare Sales Between Two Dates

- **Endpoint**: `GET /api/sales-comparison`
- **Query Parameters**:
  - `date1`: The first date for comparison (e.g., `2024-08-13`).
  - `date2`: The second date for comparison (e.g., `2024-08-14`).
- **Description**: Compares sales data between two dates.

#### Example Request

```http
GET /api/sales-comparison?date1=2024-08-13&date2=2024-08-14
```

#### Example Response

```json
[
  {
    "name": "Apple iPhone 14",
    "date1Sales": 99900,
    "date2Sales": 0,
    "difference": 99900
  },
  {
    "name": "Dell XPS 13",
    "date1Sales": 0,
    "date2Sales": 144000,
    "difference": 144000
  }
]
```

## Frontend Components

- **TodaySalesDashboard**: Component displaying today's sales data with charts and a table.
- **SalesComparisonDashboard**: Component for comparing and visualizing sales data between two dates.

## Code Structure

- **backend/**: Contains the Express.js server and API logic.
  - `index.js`: Main entry point for the server.
  - `routes/`: Contains route handlers.
- **frontend/**: Contains the React application.
  - `src/components/`: React components.
  - `src/App.js`: Main component with routing setup.
  - `src/index.js`: Entry point for the React app.

## Development

### Frontend

- **React**: Used for building the user interface.
- **React Router**: Manages navigation between pages.
- **Chart.js**: Provides charting functionality.
- **Tailwind CSS**: For utility-first CSS styling.

### Backend

- **Express.js**: Handles API requests and serves data to the frontend.

## Troubleshooting

- Ensure the backend server is running before starting the frontend.
- Verify that API endpoints are correctly configured and accessible.
- Check the browser console or server logs for errors.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Acknowledgements

- **React**: For providing a powerful frontend framework.
- **Express.js**: For a flexible backend framework.
- **Chart.js**: For robust charting capabilities.
- **Tailwind CSS**: For efficient and customizable styling.

---

Thank you for using the Sales Dashboard!
