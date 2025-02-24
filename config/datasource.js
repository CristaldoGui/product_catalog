import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: "5432",
  username: 'postgres',
  password: '18092567',
  database: 'product_catalog'
});

export default AppDataSource;