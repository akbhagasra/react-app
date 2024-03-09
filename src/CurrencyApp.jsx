import { useState, useEffect } from "react";
import InputBox from "./components/currencyApp/InputBox";

function CurrencyApp() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [inputAmount, setInputAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [conversion, setConversions] = useState({});
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    console.log("Effect called");
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setConversions(res[from]);
        setCurrencyOptions(Object.keys(res[from]));
      });
  }, [from]);

  const swap = () => {
    setInputAmount(convertedAmount);
    setConvertedAmount(inputAmount);
    setFrom(to);
    setTo(from);
  };

  const handleConvert = () => {
    setConvertedAmount(Number(conversion[to]) * inputAmount);
  };

  return (
    <div
      className="h-screen w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://currencypartners.co.za/wp-content/uploads/2022/07/CP-Main-brand-Blog-Inheritance-of-an-offshore-asset-scaled.jpg`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label={"From"}
              value={inputAmount}
              onChangeCurrency={setFrom}
              currencyOptions={currencyOptions}
              selectedCurrency={from}
              onChangeValue={setInputAmount}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label={"To"}
              value={convertedAmount}
              onChangeCurrency={setTo}
              currencyOptions={currencyOptions}
              selectedCurrency={to}
              onChangeValue={setConvertedAmount}
              disabled={true}
            />
          </div>
          <div>
            <button
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={handleConvert}
              type="submit"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CurrencyApp;
