import Card from "./card";

function RightSideDiv({value, onChange, depCurrency, arrCurrency, onDepCurrencyChange, onArrCurrencyChange, rate, loading, error}) {
    
    return (
        <Card value={value} onChange={onChange} depCurrency={depCurrency} arrCurrency={arrCurrency} onDepCurrencyChange={onDepCurrencyChange} onArrCurrencyChange={onArrCurrencyChange} taux={rate} chargement={loading} erreur={error} />
    )
}

export default RightSideDiv;