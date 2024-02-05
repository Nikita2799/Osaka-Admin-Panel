import cors from "cors";

//use cors middleware
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "Authorization",
  ],
  origin: "http://localhost:3000",
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  exposedHeaders: ["Set-Cookie"],
};

export const corsSettings = cors(options);
