// Header component for navigation bar

import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "../../assets/styles/Components";
import useTopScroll from "../../hooks/useScrollTop";

const Header: React.FC = () => {

  const {handleScrollTop} = useTopScroll()  
  return (
    <HeaderStyle>
      <div className="headercontent">
        <Link className="link" to={"/"} onClick={handleScrollTop}>
          Home Page
        </Link>
        <Link className="link" to={"/history"} onClick={handleScrollTop}>
          History Page
        </Link>
      </div>
    </HeaderStyle>
  );
};

export default Header;
