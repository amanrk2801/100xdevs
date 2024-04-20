const express = require("express");
const app = express();
const port = 3003;
import { BACKEND_URL } from "@repo/common/config";

console.log(BACKEND_URL);

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
