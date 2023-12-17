export interface DialogEventInterface {
  title: string;
  action: string;
}

export interface DialogActionInterface {
  action: string | boolean;
  description: string;
}

export class DialogEvent {}
