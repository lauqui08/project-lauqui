import "dotenv/config";
import express from "express";
import cors from "cors";
//database connection
import dbcon from "./database/dbcon.js";
//routers
import driverRoutes from "./routes/driverRoutes.js";
import truckRoutes from "./routes/truckRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import commodityRoutes from "./routes/commodityRoutes.js";
import truckingRoutes from "./routes/truckingRoutes.js";
import tankRoutes from "./routes/tankRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();

//middlewares
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());

//routes
app.use("/api/v1/project-lauqui", driverRoutes);
app.use("/api/v1/project-lauqui", truckRoutes);
app.use("/api/v1/project-lauqui", supplierRoutes);
app.use("/api/v1/project-lauqui", customerRoutes);
app.use("/api/v1/project-lauqui", commodityRoutes);
app.use("/api/v1/project-lauqui", truckingRoutes);
app.use("/api/v1/project-lauqui", tankRoutes);
app.use("/api/v1/project-lauqui", transactionRoutes);

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
