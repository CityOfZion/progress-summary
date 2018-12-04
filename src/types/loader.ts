import { CallStatus } from "react-ion-store/lib/enums";

export enum LoadingType {
  TOKEN = 0,
  REPOS = 1,
  COMMITS = 2,
}

export default interface Loading {
  status: CallStatus;
  type: LoadingType;
  message?: string;
}
