import axios from 'axios';
import { parse } from 'csv-parse';
import CaseModel from '../models/case.model';
import { logger } from '../utils/logger';
import { errorHandler } from '../utils/errorhandlers';

export class DataImportService {
  private static googleDocsUrl = process.env.Google_Docs as string; // mentioned you google docs url here

  public static async importData(): Promise<void> {
    try {
      const response = await axios.get(DataImportService.googleDocsUrl, { responseType: 'stream' });
      const csvStream = response.data.pipe(parse({ columns: true })); 

      const batch: any[] = [];
      const batchSize = 1000;

      csvStream.on('data', async (row :any) => {
        batch.push({
          bankName: row['Bank name'],
          propertyName: row['Property name'],
          city: row['City'],
          borrowerName: row['Borrower name'],
          createdAt: new Date(row['Created At']),
        });

        
        if (batch.length >= batchSize) {
          await CaseModel.insertMany(batch).catch((error) => errorHandler(error, 'Batch insertion error'));
          batch.length = 0; 
        }
      });

      
      csvStream.on('end', async () => {
        if (batch.length) {
          await CaseModel.insertMany(batch).catch((error) => errorHandler(error, 'Final batch insertion error'));
        }
        logger.info('Data import completed successfully.');
      });


      csvStream.on('error', (error: any) => {
        errorHandler(error, 'Error processing CSV data');
      });

    } catch (error) {
      errorHandler(error, 'Error fetching data from Google Docs');
    }
  }
}
