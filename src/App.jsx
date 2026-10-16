import Header from "./components/header";
import LeftSideDiv from "./components/leftSideDiv";
import RightSideDiv from "./components/rightSideDiv";

import "./App.css";
import { useEffect, useState } from "react";

const apiKey = "API_KEY";

function App() {
  const [montantValue, setMontantValue] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(null);
  const [arrCurrency, setArrCurrency] = useState("XOF");
  const [depCurrency, setDepCurrency] = useState("EUR");

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${depCurrency}`,
        );
        if (req.ok) {
          const data = await req.json();
          if (data.result === "success") {
            const rate = data.conversion_rates[arrCurrency];
            setRate(rate);
          } else if (data.result === "error") {
            throw new Error(`Erreur rencontrée : ${data["error-type"]}`);
          }
        }
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [montantValue, depCurrency, arrCurrency]);

  console.log(depCurrency, "Dep");
  console.log(arrCurrency, " Arr");
  return (
    <>
      <Header />
      <Main
        value={montantValue}
        onChange={setMontantValue}
        fromCurrency={depCurrency}
        onDepCurrencyChange={setDepCurrency}
        toCurrency={arrCurrency}
        onArrCurrencyChange={setArrCurrency}
        rate={rate}
        error={error}
        loading={loading}
      />
    </>
  );
}

function Main({
  value,
  onChange,
  fromCurrency,
  onDepCurrencyChange,
  toCurrency,
  onArrCurrencyChange,
  rate,
  loading,
  error,
}) {
  return (
    <div className="mainDiv">
      <LeftSideDiv />
      <RightSideDiv
        value={value}
        onChange={onChange}
        depCurrency={fromCurrency}
        arrCurrency={toCurrency}
        onDepCurrencyChange={onDepCurrencyChange}
        onArrCurrencyChange={onArrCurrencyChange}
        rate={rate}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
