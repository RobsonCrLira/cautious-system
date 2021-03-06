import { IOrganization } from '@interface/IOrganization';
import fs from 'fs';
import path from 'path';
import { AppError } from 'src/errors/AppError';

function importProductToFile(organization: IOrganization) {
  const url = '../fixtures/products.txt';

  try {
    const products = fs
      .readFileSync(path.resolve(__dirname, url), 'utf-8')
      .split(/\r?\n/g)
      .map((str) => {
        const data = JSON.parse(str);
        return data;
      });

    const aux = products.filter((it) => {
      if (it.department === organization.name) return it;
    });

    return aux;
  } catch (error) {
    throw new AppError('Erro na leitura do arquivo');
  }
}

export { importProductToFile };
