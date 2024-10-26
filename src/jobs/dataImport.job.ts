import { DataImportService } from '../services/dataimport.services';
import cron from 'node-cron';

export const scheduleDataImportJob = () => {
  cron.schedule('* * * * *', async () => {
    try {
      await DataImportService.importData();
    } catch (error) {
      console.error('Scheduled data import failed:', error);
    }
  });
};
