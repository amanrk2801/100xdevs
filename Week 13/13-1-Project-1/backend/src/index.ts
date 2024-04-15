import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";

// Create the main Hono app
const app = new Hono<{
  // this required for removing error in c.env.DATABASE_URL
  Bindings: {
    DATABASE_URL: string; // present in wrangler.toml
    JWT_SECRET: string; // // present in wrangler.toml
  };
}>();

app.use("/*", cors());
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
