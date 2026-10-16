import Input from "./input";
import Select from "./select";
import Button from "./button";

function Card({ value, onChange, depCurrency, arrCurrency, onDepCurrencyChange, onArrCurrencyChange, taux, chargement, erreur }) {
  let total;
  if (chargement) {
    total = "Chargement..."
  } else if (erreur) {
    total = "Erreur..."
  } else {
    total = (taux * value).toString().padEnd(2, '0')
  }

  return (
    <div className="rightSide">
      <div className="changeCard">
        <div
          style={{
            height: "20%",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label htmlFor="montant">Montant</label>
          <Input value={value} onChange={onChange} />
        </div>
        <div className="select">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "40%",
              height: "100%",
            }}
          >
            <label htmlFor="fromSelect">De</label>
            <Select
              id="fromSelect"
              defaultCurrency="EUR - Euro"
              onDepCurrencyChange={onDepCurrencyChange}
              depCurrency={depCurrency}
            />
          </div>
          <button
            style={{
              width: "10%",
              aspectRatio: "1/1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f8fbf9",
              border: "1px solid #c3d3c9",
              borderRadius: "50%",
            }}
            className="invert"
          >
            <i className="bi bi-arrow-down-up"></i>
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "40%",
              height: "100%",
            }}
          >
            <label htmlFor="toSelect">Vers</label>
            <Select id="toSelect" onArrCurrencyChange={onArrCurrencyChange} arrCurrency={arrCurrency} />
          </div>
        </div>

        <div className="converted">
          <p style={{ color: "#818181" }}>
            {value} {depCurrency} equivaut à
          </p>
          <p style={{ fontWeight: "bold", fontSize: "1.3rem", color: "white" }}>
            {total} {arrCurrency}
          </p>
          <p style={{ color: "#818181" }}>
            1 {depCurrency} = {1 * taux} {arrCurrency}
          </p>
        </div>

        <Button />
      </div>
    </div>
  );
}

export default Card;
