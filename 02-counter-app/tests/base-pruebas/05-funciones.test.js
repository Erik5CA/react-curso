import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUSer debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Fernando";
    const userTest = getUsuarioActivo(name);
    expect(userTest).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
