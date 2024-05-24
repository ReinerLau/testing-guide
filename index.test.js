const getAboutUsLink = require("./index");
const getUserDisplayName = require("./name");

jest.mock("./UserStore", () => ({
  UserStore: {
    getUser: jest.fn().mockImplementation((arg) => ({
      FirstName: "Ondrej",
      LastName: "Polesny",
    })),
    setUser: jest.fn(),
  },
}));

test("Returns about-us for english language", () => {
  expect(getAboutUsLink("en-US")).toBe("/about-us");
});

test("Returns display name", () => {
  expect(getUserDisplayName(1)).toBe("Polesny, Ondrej");
});
