import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "interfaces/redux/store";

const Dashboard = () => {
  const token = useSelector<RootState>((state) => state.auth.token);
  console.log(token);
  return <Typography>Dashboard</Typography>;
};

export { Dashboard };
