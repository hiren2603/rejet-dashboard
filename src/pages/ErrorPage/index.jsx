import React, { useEffect } from "react";
import { redirect } from "react-router-dom";
const ErrorPage = () => {
  useEffect(() => {
    redirect("/");
  });
  return <div>ErrorPage</div>;
};

export default ErrorPage;
