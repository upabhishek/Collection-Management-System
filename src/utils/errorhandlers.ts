import { logger } from './logger';

export const errorHandler = (error: any, message: string): void => {
  logger.error(`${message}: ${error.message}`);
};
