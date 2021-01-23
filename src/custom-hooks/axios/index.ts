import { useEffect } from "react";
import { RootState } from "interfaces/redux/store";
import { useSelector } from "react-redux";
import axios from "axios";

export const useAxiosInterceptors = () => {
  const token = useSelector<RootState>((state) => state.auth.token);
  useEffect(() => {
    axios.interceptors.request.use((req) => {
      req.headers.authorization = token;
      return req;
    });
  }, [token]);

  useEffect(() => {}, []);
};
