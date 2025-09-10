import { test, expect } from "vitest";
import request from "supertest";
import app from "../server.js";

test("GET / should return index.html", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.headers["content-type"]).toContain("text/html");
});
