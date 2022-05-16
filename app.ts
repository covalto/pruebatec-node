import express, { Application } from "express";
import authRoutes from "./src/routes/autenticacion";
import morgan from "morgan";


const app: Application = express();

//configurando puertos
app.set("port", 4000);
//middlewares
app.use(morgan("dev"));
app.use(express.json());


//puertos
app.use("/api/auth", authRoutes);

export default app;
