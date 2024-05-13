import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState("");
    useEffect(() => {
        fetch(
            `https://v6.exchangerate-api.com/v6/76355af1ca04172acc1a921d/latest/${currency}`
            // `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates));
        // console.log(data, "data");
    }, [currency]);
    return data;
}

export default useCurrencyInfo;
