import request from "supertest";
import app from "../src/server.js";

describe("GET /", () => {
  it("should return the index.html file", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("text/html");
  });
});
