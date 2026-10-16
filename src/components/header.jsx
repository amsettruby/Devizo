import "../App.css";

function Header() {
  const logoStyle = {
    width: "50%",
    height: "100%",
    // backgroundColor: "yellow",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    paddingLeft: "10px",
  };

  const navStyle = {
    width: "50%",
    height: "100%",
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  };

  const logoImgStyle = {
    height: "35%",
    aspectRatio: "1/1",
    backgroundColor: "#138f648a",
    borderRadius: "50%",
    alignContent: "center",
    textAlign: "center",
    marginRight: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  };

  return (
    <>
      <div className="headerMain">
        <div className="logo" style={logoStyle}>
          <div className="logoImg" style={logoImgStyle}>
            <img
              src="/devizo.svg"
              alt="logo devizo"
              style={{ height: "70%", aspectRatio: "1/1" }}
            />
          </div>
          <div>Devizo</div>
        </div>
        <div className="nav" style={navStyle}>
          <div>Convertisseur</div>
          <div>Taux du jour</div>
          <div>Historique</div>
          <div>Aide</div>
        </div>
      </div>
    </>
  );
}

export default Header;
