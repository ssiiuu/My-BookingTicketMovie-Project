import React, { Fragment } from "react";
import { Route } from "react-router-dom";

export const UserTemplate = (props) => {
  //path, exact, Component

  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <Fragment>
            <div
              style={{ width: "100vw", minHeight: "100vh" }}
              className="bg-gradient-to-tl from-green-400 to-indigo-900 py-20"
            >
              <div
                style={{ width: "100%" }}
                className="flex items-center  justify-center"
              >
                <Component {...propsRoute} />
              </div>
            </div>
          </Fragment>
        );
      }}
    />
  );
};
