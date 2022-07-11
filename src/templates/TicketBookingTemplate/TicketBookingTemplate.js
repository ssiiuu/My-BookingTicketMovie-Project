import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import localStorageServ from "../../services/locaStorage.service";

export default function TicketBookingTemplate(props) {
  const { Component, ...restProps } = props;

  if (!localStorageServ.userInfor.get()) {
    return <Redirect to={"/login"} />;
  }
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
}
