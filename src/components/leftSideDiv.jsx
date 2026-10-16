function LeftSideDiv() {
  return (
    <div className="leftSide" style={{padding: '20px'}}>
      <div style={{display: 'flex', flexDirection: "column", alignItems: 'flex-start', justifyContent: 'space-around', height: "50%", width: '60%'}}>
        <p style={{ color: "#0b7a53", fontSize: '1.4rem', fontWeight: 'bold'}}>TAUX DE CHANGE EN DIRECT</p>
        <p style={{fontWeight: '900', fontSize: '3rem'}}>Convertissez votre argent, sans surprise</p>
        <p>
          Choisissez deux devises, saisissez un montant et obtenez le resultat
          au taux du jour
        </p>
      </div>
    </div>
  );
}

export default LeftSideDiv;
