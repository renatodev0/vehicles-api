import express, { Express } from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";
import vehicleRoutes from "./routes/vehicles/vehicles.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", vehicleRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
