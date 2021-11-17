const axios = require("axios");
const UserModel = require("../UserModel");

jest.mock("axios");

describe("User Model Test", () => {
	it("[success]", async () => {
		try {
			const users = [
				{ id: 1, name: "Udin" },
				{ id: 2, name: "Kosasih" },
			];
			axios.get.mockResolvedValueOnce({ data: users });
			const result = await UserModel.findAll();
			expect(result).toEqual(users);
		} catch (error) {
			console.log("🚀 ~ file: user-model.test.js ~ line 12 ~ it ~ error", error);
		}
	});

	it("failed", async () => {
		try {
			const message = "Network Error";
			axios.get.mockRejectedValueOnce(message);
			const result = await UserModel.findAll();
			expect(result).toEqual(message);
		} catch (error) {
			console.log("🚀 ~ file: user-model.test.js ~ line 25 ~ it ~ error", error);
		}
	});
});
