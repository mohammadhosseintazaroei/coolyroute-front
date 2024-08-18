export enum LoginStates {
  Login = "LOGIN",
  EnterOtp = "ENTEROTP",
  FurtherInformation = "FURTHERINFORMATION",
}
export interface LoginSteps {
  state: LoginStates;
  title: string;
  description: string;
  disableBackButton?: boolean;
}
