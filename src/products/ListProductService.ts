import dataOrganization from '../fixtures/organization.json';
import dataUser from '../fixtures/users.json';
import { Level } from '../utils/Level';
import { importProductToFile } from './ImportProductsToFile';

class ListProductServices {
  async execute(organizationName: string, userId: string, roles: string) {
    const [organization] = dataOrganization.filter(
      (data) => data.name === organizationName,
    );

    if (!organization) {
      throw new Error('Incorrect name!');
    }

    const [user] = dataUser.filter((data) => data.userId === userId);

    if (!Level(roles, organization.level, organizationName)) {
      throw new Error('Não Authorized!');
    }

    const products = importProductToFile(organization);

    return products;
  }
}
export { ListProductServices };
