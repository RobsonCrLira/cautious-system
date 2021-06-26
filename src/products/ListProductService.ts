import readFile from "fs/readFile";

class ListProductServices {
  async execute(name: string) {
    const product = "../fixtures/product.txt";

    // console.log(product);
    // const productJson = JSON.stringify(dataText);

    const dados = readFile(product, "utf-8", function (err, data) {
      console.log(data);
    });
    return dados;
  }
}
export { ListProductServices };
