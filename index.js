import express from "express";
import {createProxyMiddleware} from "http-proxy-middleware";
import cors from "cors";

const app = express();
const API_SERVICE_URL = "http://localhost:5000";
app.use(cors({exposedHeaders: '*'}));
app.use("/", createProxyMiddleware({target: API_SERVICE_URL, changeOrigin: true, ws: true, logLevel: "debug"}));
app.listen(8080, () => {
    console.log(`Starting Proxy Server at :local 5000`);
});