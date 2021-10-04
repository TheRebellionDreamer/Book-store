import {
  NotificationAction,
  NotificationState,
  notificationActions,
} from "../types/notification.types";

export const notificationReducer = (
  state: NotificationState = null,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case notificationActions.SHOW_NOTIFICATION:
      return { ...action.payload };
    default:
      return state;
  }
};
