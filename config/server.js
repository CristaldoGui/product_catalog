import express from "express";
import  AppDataSource  from "./datasource.js";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    
    console.log('Banco de dados')
    app.listen(3000, () => {
      console.log("App is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
