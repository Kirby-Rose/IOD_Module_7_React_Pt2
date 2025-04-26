import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Skeleton,
} from "@mui/material";

import { useSearchParams } from "react-router-dom";

import useQuery from "../hooks/useQuery";
import { use } from "react";

const currencies = [
  { name: "USD", symbol: "$" },
  { name: "AUD", symbol: "$" },
  { name: "NZD", symbol: "$" },
  { name: "GBP", symbol: "£" },
  { name: "EUR", symbol: "€" },
  { name: "SGD", symbol: "$" },
];

const BitcoinRates = () => {
  const [searchParams] = useSearchParams();
  const optionalCur = searchParams.get("currency");
  const [currency, setCurrency] = useState(
    optionalCur ? optionalCur : currencies[0].name
  );

  const [data, isLoading] = useQuery(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  const [currencySymbol, setCurrencySymbol] = useState(currencies[0].symbol);

  const [BitcoinRates, setBitcoinRates] = useState();

  const [userInput, setUserInput] = useState(1);

  useEffect(() => {
    const getCurrencyFromQueryData = (data, key) => {
      if (data && key) {
        setBitcoinRates(data.bitcoin[key]);
      }
    };

    getCurrencyFromQueryData(data, currency.toLowerCase());
    console.log("data", data);
  }, [data]);

  // useEffect(() => {
  //   fetch(
  //     `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data, data.bitcoin[currency.toLowerCase()]);
  //       setBitcoinRates(data.bitcoin[currency.toLowerCase()]);
  //     })
  //     .catch((error) => console.error("Error fetching data", error));
  //   console.log("Effect is applied");
  //   return () => {
  //     console.log("cleaning up");
  //   };
  // }, [currency]);

  const handleCurrencySelection = (e) => {
    let matchedItem = currencies.find((curr) => {
      if (curr.name === e.target.value) {
        return curr.symbol;
      }
    });
    setCurrencySymbol(matchedItem.symbol);
    setCurrency(e.target.value);
  };
  const currencyOptions = currencies.map((curr) => (
    <MenuItem value={curr.name} key={curr.name}>
      {curr.name}
    </MenuItem>
  ));
  const resultDisplayHandler = () => {
    return isLoading ? (
      <Skeleton width={"400px"} height={"100px"} />
    ) : (
      <Typography>
        {userInput} x Bitcoin = {currencySymbol}{" "}
        {BitcoinRates ? (userInput * BitcoinRates).toLocaleString() : ""}
      </Typography>
    );
  };

  return (
    <>
      <Typography sx={{ padding: "20px" }}>Choose currency:</Typography>
      <Box>
        <TextField
          sx={{ m: 1 }}
          id="outlined-basic"
          placeholder={currencySymbol}
          label="Amount"
          variant="outlined"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="currency-rates-label">Currency</InputLabel>
          <Select
            labelId="currency-rates-label"
            id="currency-rates"
            value={currency}
            label="Currency"
            onChange={handleCurrencySelection}
          >
            {currencyOptions}
          </Select>
        </FormControl>
        {resultDisplayHandler()}
      </Box>
    </>
  );
};
export default BitcoinRates;

// <Typography variant="h4" sx={{ padding: "20px" }}>
// {userInput} x {currencySymbol}
// {BitcoinRates ? (userInput * BitcoinRates).toLocaleString() : ""}
// {/* {BitcoinRates?.toLocaleString()} */}
// <span style={{ fontSize: "0.5em" }}> per Bitcoin</span>
// </Typography>
