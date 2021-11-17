// user.test.js
const UserModel = require("../UserModel");
const UserController = require("../UserController");
const { Model } = require("mongoose");

beforeEach(() => {
	jest.restoreAllMocks();
});

describe("User Controller", () => {
	it("[success - 200", async () => {
		try {
			jest
				.spyOn(UserModel, "findAll")
				.mockResolvedValue([{ id: 1, name: "Udin" }]);
			const req = {};
			const res = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn().mockReturnThis(),
			};
			await UserController.findAll(req, res);
			expect(res.status).toBeCalledWith(200);
			expect(res.json).toBeCalledWith([{ id: 1, name: "Udin" }]);
		} catch (error) {
			console.log("🚀 ~ file: user.test.js ~ line 58 ~ it ~ error", error);
		}
	});

	it("[failed - 500]", async () => {
		try {
			jest
				.spyOn(UserModel, "findAll")
				.mockRejectedValueOnce({ status: 500, message: "Model Error" });
			const req = {};
			const res = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn().mockReturnThis(),
			};
			await UserController.findAll(req, res);
			expect(res.status).toBeCalledWith(500);
			expect(res.json).toBeCalledWith({ status: 500, message: "Model Error" });
		} catch (error) {
			console.log("🚀 ~ file: user.test.js ~ line 58 ~ it ~ error", error);
		}
	});
});
