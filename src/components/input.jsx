function Input({ value, onChange }) {
  return (
    <input
      className="input"
      type="number"
      name="montant"
      id="montant"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder="Entrez un montant"
    />
  );
}

export default Input;
