import "dotenv/config";
import express from "express";
//database connection
import dbcon from "./database/dbcon.js";
//routers
import driverRoutes from "./routes/driverRoutes.js";

const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/project-lauqui", driverRoutes);
//start server
const startServer = async () => {
  try {
    await dbcon(process.env.URI);
    app.listen(process.env.PORT, () =>
      console.log("Server is running on port " + process.env.PORT)
    );
  } catch (error) {
    console.log(error.message);
  }
};
startServer();
