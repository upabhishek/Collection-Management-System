
# Collection Management System

## Project Overview
The Collection Management System is a backend solution designed to integrate and standardize data collected from various partners. Each partner provides data in CSV format, which may differ in structure. This project imports, processes, and stores data in a unified MongoDB database structure, providing an API endpoint for data aggregation and analysis.

## Features
- **Automated Data Import Job**: Imports data from a CSV file hosted on Google Docs, scheduled to run daily at 10 AM and 5 PM.
- **Error Handling and Logging**: Comprehensive error handling and logging using Winston and Mongoose to ensure smooth operations.
- **Data Aggregation API**: Provides a RESTful API endpoint to retrieve aggregated data from the Cases collection, with support for city-based queries and date range filters.

## Tech Stack
- **Node.js**: Server-side JavaScript environment
- **TypeScript**: Strong typing for enhanced code quality
- **Express**: Web framework for API development
- **MongoDB**: Database to store standardized data
- **Mongoose**: ODM for MongoDB
- **@typegoose/typegoose**: Mongoose models with TypeScript support
- **Winston**: Logging framework
- **node-cron**: Scheduling library for Node.js



### File Explanations
- **controllers/**: Handles business logic and responses for API routes.
- **models/**: Mongoose schemas defining data structure.
- **routes/**: Defines API routes and endpoints.
- **services/**: Core business logic for data import and processing.
- **utils/**: Helper utilities, including logging.

## Getting Started

### Prerequisites
- **Node.js** (v14+)
- **MongoDB** (local or cloud)
- **Google Docs** link to CSV file for data import

### Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/collection-management-system.git
   cd collection-management-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and configure the following:
   ```
   MONGO_URI=your_mongo_connection_string
   CSV_URL=your_google_docs_csv_url
   ```

4. **Run the Application**
   ```bash
   npm start
   ```

## Usage

### API Endpoints

1. **GET /api/cases/aggregated**
   - Retrieves aggregated data based on city with optional date range filtering.
   - **Query Parameters**:
     - `startDate` (optional): Start of the date range.
     - `endDate` (optional): End of the date range.

### Scheduler
The data import job runs automatically at 10 AM and 5 PM daily. It fetches data from the specified CSV file, processes it in batches, and stores it in MongoDB.

## Testing
Use tools like Postman or curl to test the API. Here’s an example:

```bash
curl -X GET "http://localhost:3000/api/cases/aggregated?startDate=2023-01-01&endDate=2023-12-31"
```

## Error Handling and Logging
- **Error Handling**: Comprehensive error handling in the data import and API processes.
- **Logging**: Winston logs job progress, errors, and other key events.

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License.
