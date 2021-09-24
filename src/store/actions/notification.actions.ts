import { Dispatch } from "react";
import { createShowNotification } from "../action-creators/notification.action-creators";
import { INoptification, NotificationAction } from "../reducers/notification.reducer";

export const showNotification = (notification: INoptification) =>
  (dispatch: Dispatch<NotificationAction>) => dispatch(createShowNotification(notification))