export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type RequestState = 'blank' | 'processing' | 'done';

export type ResponseState = 'blank' | 'success' | 'failure';
