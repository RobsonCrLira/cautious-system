import fs from 'fs';
import path from 'path';

import { IOrganization } from '@interface/IOrganization';

function importProductToFile(organization: IOrganization): object[] {
  const url = '../fixtures/products.txt';
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
}

export { importProductToFile };
