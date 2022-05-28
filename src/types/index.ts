// Flex Layout
export type TFlexDirections = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type TFlexJustifyContents =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
export type TFlexAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'

export type TSelectedTab = 'account' | 'code' | 'dsmi'
export type UserInfoType = {
  username: string;
  active: boolean;
  dSMIAmount: number;
}