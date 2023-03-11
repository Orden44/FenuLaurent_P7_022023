import { Link } from "react-router-dom";
import Logowhite from "../assets/img/logowhite.svg";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src={Logowhite} alt="Logo Kasa" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;