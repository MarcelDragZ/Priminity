export interface DialogEventInterface {
  title: string;
  action: string;
  enableTextField: boolean;
}

export interface DialogActionInterface {
  action: boolean;
  description: string;
}

export class DialogEvent {}
