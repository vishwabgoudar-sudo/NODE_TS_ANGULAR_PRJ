import { getDataFromJson } from '../../infrastructure/persistency/extensionsDataModel.persistency';
import { ExtensionsDataModel } from '../models/extensionsDataModel';

export const getExtensionsData = async (): Promise<ExtensionsDataModel[]> => {
  return await getDataFromJson();
};
