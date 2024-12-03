const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

describe("E2E Tests", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("Full flow", async () => {
    // Student registers
    const student = await request(app).post("/api/auth/register").send({
      name: "Student A1",
      email: "student1@test.com",
      password: "password",
      role: "student",
    });

    expect(student.status).toBe(201);
    // Additional flow tests...
  });
});
