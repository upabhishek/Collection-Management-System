import express from 'express';
import * as dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();
import { connectDatabase } from './src/db/dbconnection';
import caseRoutes from './src/routes/caseRoutes';
import { scheduleDataImportJob } from './src/jobs/dataImport.job';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', caseRoutes);

connectDatabase();
scheduleDataImportJob();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
