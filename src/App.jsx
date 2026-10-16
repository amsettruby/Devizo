import Header from "./components/header";
import LeftSideDiv from "./components/leftSideDiv";
import RightSideDiv from "./components/rightSideDiv";
import "./App.css";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [montantValue, setMontantValue] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(null);
  let [arrCurrency, setArrCurrency] = useState("XOF");
  let [depCurrency, setDepCurrency] = useState("EUR");

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
        } else {
          throw new Error(req.status)
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [depCurrency, arrCurrency]);

  function invert() {
    setDepCurrency(arrCurrency);
    setArrCurrency(depCurrency)
  }

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
        invertCurrency={invert}
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
  invertCurrency
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
        invertCurrency={invertCurrency}
      />
    </div>
  );
}

export default App;
