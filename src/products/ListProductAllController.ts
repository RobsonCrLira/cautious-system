import { Request, Response } from "express";
import { ListProductServices } from "./ListProductService";

class ListProductAllController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const listProductServices = new ListProductServices();

    const products = listProductServices.execute(name);

    return response.json(products);
  }
}

export { ListProductAllController };
