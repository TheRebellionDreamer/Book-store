import * as shopListActions from "./shopList.actions";
import * as notificationActions from "./notification.actions";
import * as dialogActions from "./dialog.actions"

export default {
  ...notificationActions,
  ...shopListActions,
  ...dialogActions
};
