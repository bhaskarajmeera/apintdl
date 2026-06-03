import express from "express";

const app = express();
const port = 8000;
import morgan from "morgan";
app.use(express.json());
app.use(morgan("combined"));
app.use('/api/v1/tasks', taskRouter);
import taskRouter from "./src/routers/taskRouter.js";

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
