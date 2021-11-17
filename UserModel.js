const axios = require("axios");

class UserModel {
	static findAll = async () => {
		try {
			const { data } = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);
			return data;
		} catch (error) {
			return error;
		}
	};
}

module.exports = UserModel;
