import config from "./config/config";
import { app } from "./app";

app.listen(config.isProduction, () =>
  console.log(`🔥 Server is running || port = ${config.isProduction}`)
);
