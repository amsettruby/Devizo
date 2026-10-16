function Select({id, defaultCurrency, onDepCurrencyChange, onArrCurrencyChange}) {
    return (
      <select name="" id={id} className="selectOpt" onChange={(e) => {
        if (id == 'fromSelect') {
          onDepCurrencyChange(e.target.value);
        } else if (id == 'toSelect') {
          onArrCurrencyChange(e.target.value)
        }
      } }>
        <option value="">Choisissez une devise</option>
        <option value="EUR">EUR - Euro</option>
        <option value="USD">USD - Dollar americain</option>
        <option value="XOF">XOF - Franc CFA</option>
        <option value="GNF">GNF - Franc Guinéen</option>
      </select>
    );
}

export default Select;