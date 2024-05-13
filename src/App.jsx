import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);
    console.log(options);
    console.log(to, from);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <div
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1600590711251-c439ffcc61bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
            className="flex flex-col bg-cover bg-center justify-center items-center h-screen w-full"
        >
            <h1 className="text-[#dbf4e0] text-center font-bold mb-10 text-4xl sm:text-6xl w-full">
                Currency Converter
            </h1>

            <div className="p-5 h-[60%] sm:h-[55%] lg:w-[50%] md:w-[60%] w-[80%] bg-black/50 rounded-3xl border border-slate-700 flex justify-center items-center">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                    className="w-full flex flex-col gap-1"
                >
                    <div className="w-full">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            onAmountChange={(amount) => setAmount(amount)}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            onClick={swap}
                            type="button"
                            className="hover:bg-[#00342F] transition-all ease-in-out hover:font-semibold absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-xl bg-[#234428] text-white px-4 py-1"
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button className="hover:bg-[#00342F] border-[#676b6b] border transition-all ease-in-out hover:font-bold text-white w-full font-semibold text-[20px] bg-[#234428] p-3 rounded-2xl mt-5">
                        Convert {from} to {to}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
