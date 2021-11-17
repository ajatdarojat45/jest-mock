const UserModel = require("./UserModel");

class UserController {
	static findAll = async (req, res) => {
		try {
			const users = await UserModel.findAll();
			res.status(200).json(users);
		} catch (error) {
			res.status(error.status).json(error);
		}
	};
}

module.exports = UserController;
