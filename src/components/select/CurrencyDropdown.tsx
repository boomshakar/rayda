import { useAppDispatch, useAppSelector } from "hooks/redux-hooks.";
import { CurrencyModel } from "models/redux-models";
import React from "react";
import { getXchangeRate } from "service/getXchangeRate";
import { useGetCurrencyRateQuery } from "store/apiSlice";
import { updateProductCurrency } from "store/productsSlice";
import { changeCurrencyVal, selectUiState, toggleCurrDrawer } from "store/uiSlice";

const CurrencyDropdown = () => {
	const dispatch = useAppDispatch();
	const { currencyDrawer, currency_arr, currency_val } = useAppSelector(selectUiState);
	const xchangeRate = useGetCurrencyRateQuery;

	const toggleDropdown = () => dispatch(toggleCurrDrawer());

	const handleItemClick = async (data: CurrencyModel) => {
		//  getXchangeRate({ from: currency_val, to: data }).then((res)=>console.log(res));
		// console.log({ response });
		// console.log({ resp: response});

		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "f3666f333cmsh302b5634d41171bp1f5ceajsn7e396f7db55c",
				"X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
			},
		};
		fetch(
			`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${currency_val}&to=${data}&amount=1`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				dispatch(updateProductCurrency(response?.rates[data]?.rate));
				dispatch(changeCurrencyVal(data));
				dispatch(toggleCurrDrawer());
			})
			.catch((err) => console.error(err));
	};

	let currencyIcon: string;

	switch (currency_val) {
		case "USD":
			currencyIcon = "$";
			break;
		case "EUR":
			currencyIcon = "€";
			break;
		case "JPY":
			currencyIcon = "¥";
			break;

		default:
			currencyIcon = "$";
			break;
	}

	return (
		<div className="dropdown">
			<div className="dropdown-header" onClick={toggleDropdown}>
				{currencyIcon}
			</div>
			<div className={`dropdown-body ${currencyDrawer && "open"}`}>
				{currency_arr.map((item) => (
					<div key={item} className="dropdown-item" onClick={(e) => handleItemClick(item)}>
						<span className={`dropdown-item-dot ${item == currency_val && "selected"}`}></span>
						{item === "USD" ? "$" : item === "EUR" ? "€" : item === "JPY" && "¥"}&nbsp;
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default CurrencyDropdown;
