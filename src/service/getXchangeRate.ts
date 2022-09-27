interface Call {
	from: string;
	to: string;
}
export const getXchangeRate = (data: Call) => {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "f3666f333cmsh302b5634d41171bp1f5ceajsn7e396f7db55c",
			"X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
		},
	};
	fetch(
		`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${data.from}&to=${data.to}&amount=1`,
		options
	)
		.then((response) => response.json())
		.then((response) => {
			console.log({ gh: response });
			return response;
		})
		.catch((err) => console.error(err));
};
