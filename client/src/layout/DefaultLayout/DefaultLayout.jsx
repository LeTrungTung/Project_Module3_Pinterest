import React from "react";
import "./DefaultLayout.css";
import HeaderOnLogin from "../../components/Header/HeaderOnLogin";
import CardImage from "../../components/CardImage/CardImage";

const DefaultLayout = ({ dataImage }) => {
  return (
    <div className="wrap-default-layout">
      <HeaderOnLogin />
      <CardImage dataImage={dataImage} />
    </div>
  );
};

export default DefaultLayout;
