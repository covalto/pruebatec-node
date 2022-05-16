import { profile } from "../src/controllers/controlautent";
import request from "supertest";

describe("GET/api/auth/profile", () => {
  test("preparing testing",  () => {
    const respuesta =  request(profile).get("/api/auth/profile").send;

    expect(respuesta.toString);
  });
});
