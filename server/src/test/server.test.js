import { test, expect } from "vitest";
import request from "supertest";
import app from "../server.js";

test("GET /api/helloworld returns 'Hello world'", async () => {
  const res = await request(app).get("/api/helloworld");
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Hello world");
});
