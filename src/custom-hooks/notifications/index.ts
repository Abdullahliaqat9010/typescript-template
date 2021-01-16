import { useState, useEffect } from "react";
import firebase from "firebase/app";
import { env } from "@env";
import { useDispatch } from "react-redux";
import { setToken } from "@redux/actions/notification";

export const useNotificationRegisteration = () => {
  const [loading, setLoading] = useState(true);
  const messaging = firebase.messaging();
  const dispatch = useDispatch();

  const getToken = async () => {
    try {
      const token = await messaging.getToken({ vapidKey: env.VAPID_KEY });
      await dispatch(setToken(token));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getToken();
    // eslint-disable-next-line
  }, []);

  return loading;
};
