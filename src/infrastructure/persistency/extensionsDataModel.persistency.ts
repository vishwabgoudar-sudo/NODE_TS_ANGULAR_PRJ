import fs from 'fs/promises';
import path from 'path';
import { ExtensionsDataModel } from '../../domain/models/extensionsDataModel';

export const getDataFromJson = async (): Promise<ExtensionsDataModel[]> => {
  const filePath = path.join(__dirname, '../../../data/extensionsDataModel.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};
