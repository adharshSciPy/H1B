import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import connectMongodb from "./mongoDb/mongoConnect.js";
import dotenv from "dotenv";
import adminRouter from "./routes/adminRouter.js";
import userRouter from "./routes/userRouter.js";
import collaboratorRouter from "./routes/collaboratorRouter.js";
import { fileURLToPath } from "url";
import guestRouter from "./routes/guestRouter.js";
import linkRouter from "./routes/linkRouter.js";
import socialMediaRouter from "./routes/socialMediaRouter.js";


dotenv.config();
const app = express();
dotenv.config({
  path: "./env",
});
const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cors());
app.use(bodyParser.json());
connectMongodb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running ⚙️ at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/collaborator", collaboratorRouter);
app.use("/api/v1/guest", guestRouter);
app.use("/api/v1/link", linkRouter);
app.use("/api/v1/social", socialMediaRouter);



app.use("/uploads", express.static(path.join(__dirname, "uploads")))


  