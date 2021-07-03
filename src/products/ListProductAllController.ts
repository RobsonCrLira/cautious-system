import { Request, Response } from 'express';

import { ListProductServices } from './ListProductService';

class ListProductAllController {
  async handle(request: Request, response: Response) {
    const { organizationName } = request.params;
    const { userId, roles } = request;
    const listProductServices = new ListProductServices();

    const products = await listProductServices.execute(
      organizationName,
      userId,
      roles,
    );

    return response.json(products);
  }
}

export { ListProductAllController };
