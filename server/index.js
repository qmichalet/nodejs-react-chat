const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
	const { username } = req.body;

	try {
		const response = await axios.put(
			"https://api.chatengine.io/users/",
			{ username: username, secret: username, first_name: username },
			{ headers: { "private-key": "8b9ceb63-f8e7-4c3d-9bcb-4b71828283d5" } }
		);

		return res.status(response.status).json(response.data);
	} catch (error) {
		return res.status(error.response.status).json(error.response.data);
	}
});

app.listen(3001);
