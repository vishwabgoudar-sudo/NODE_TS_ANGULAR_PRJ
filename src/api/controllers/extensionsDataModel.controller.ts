import { getExtensionsData } from '../../domain/services/extensionsDataModel.service';
import { Request, Response } from 'express';

export const fetchExtensionsData = async (req: Request, res: Response) => {
  try {
    const data = await getExtensionsData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
