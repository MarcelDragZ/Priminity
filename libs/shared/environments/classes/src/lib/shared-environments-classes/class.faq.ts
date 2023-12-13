import { RealtimeDatabase } from './class.realtimedatabase';

export interface FaqInterface {
  creatorId: string;
  title: string;
  description: string;
  createdTime: number;
}

export class Faq extends RealtimeDatabase<FaqInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'faqs';
  }
}
