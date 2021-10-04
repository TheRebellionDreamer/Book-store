import { VariantType } from "notistack"

export enum notificationActions {
  SHOW_NOTIFICATION = 'notification/show-notification'
}

export interface INoptification {
  message: string,
  type: VariantType,
  action?: React.ReactNode
}

export type NotificationState = INoptification | null

export interface SHOW_NOTIFICATION_ACTION {
  readonly type: notificationActions.SHOW_NOTIFICATION,
  readonly payload: INoptification
}
export type NotificationAction = SHOW_NOTIFICATION_ACTION