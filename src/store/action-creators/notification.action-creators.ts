import { INoptification, notificationActions, SHOW_NOTIFICATION_ACTION } from "../reducers/notification.reducer";

export const createShowNotification = (payload: INoptification): SHOW_NOTIFICATION_ACTION => ({
  type: notificationActions.SHOW_NOTIFICATION,
  payload
})