const notFoundHander = (_req, _res, next) => {
	const error = new Error("resourse not found");
	error.status = 404;
	next(error);
};


const errorHandelar = (error, _req, res, _next) => {
	if (error.status) {
		return res.status(error.status).json({
			message: error.message,
		});
	}

	res.status(500).json({
		message: "Something went wrong",
	});
};


module.exports = {notFoundHander, errorHandelar}