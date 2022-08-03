import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../../components/Layout/Footer/Footer";
import NavHeader from "../../components/Layout/NavHeader/NavHeader";

export default function HomeTemplate(props) {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div>
              <NavHeader />
              <Component {...propsRoute} />
              <Footer />
            </div>
          </Fragment>
        );
      }}
    />
  );
}
