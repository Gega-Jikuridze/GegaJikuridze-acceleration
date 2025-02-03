// ErrorPage for any wrong URL

import React from "react";
import ErrorImage from "../assets/errorPage.png";
import { ErrorPageStyle } from "../assets/styles/Pages";
import { useNavigate } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ErrorPageStyle>
      <img src={ErrorImage} alt="Error" />
      <button onClick={() => navigate("/")}>Go Back</button>
    </ErrorPageStyle>
  );
};

export default ErrorPage;
