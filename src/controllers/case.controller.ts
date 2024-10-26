import { Request, Response } from 'express';
import CaseModel from '../models/case.model';

export class CasesController {
  public static async getAggregatedData(req: Request, res: Response): Promise<void> {
    try {
      const { startDate, endDate } = req.query;
      const filter: any = {};

      if (startDate && endDate) {
        filter.createdAt = { $gte: new Date(startDate as string), $lte: new Date(endDate as string) };
      }

      const result = await CaseModel.aggregate([
        { $match: filter },
        { $group: { _id: '$city', totalCases: { $sum: 1 } } },
        { $project: { _id: 0, city: '$_id', totalCases: 1 } },
      ]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching aggregated data', error });
    }
  }
}
