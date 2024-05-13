import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "inr",
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputID = useId();

    return (
        <div className="bg-[#c3f9e1] rounded-3xl text-md flex p-4 px-5 h-auto w-full">
            <div className="w-1/2">
                <label htmlFor={amountInputID}>{label}</label>
                <input
                    id={amountInputID}
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                    className="outline-none w-full bg-transparent py-1 mt-2 "
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/60 mb-4 w-full">Currency Type</p>
                <select
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                    className="rounded-lg px-1 py-1 bg-[#23442837] cursor-pointer outline-none"
                >
                    {currencyOptions.map((currency) => (
                        <option value={currency} key={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
