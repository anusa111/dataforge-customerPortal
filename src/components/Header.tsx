import qr from "../../public/headerImages/qr.png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="layout header-inner flex-layout">
        <div className="header-title">Customer Details:</div>
        <img src={qr} alt="" />
      </div>
    </div>
  );
};

export default Header;
