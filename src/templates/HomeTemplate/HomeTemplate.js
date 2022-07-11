import React from "react";
import Footer from "../../components/Layout/Footer/Footer";
import NavHeader from "../../components/Layout/NavHeader/NavHeader";

export default function HomeTemplate({ Component }) {
  return (
    <div>
      <NavHeader />
      <Component />
      <Footer />
    </div>
  );
}
