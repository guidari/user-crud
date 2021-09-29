import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log("Server is running on port 3333"));
