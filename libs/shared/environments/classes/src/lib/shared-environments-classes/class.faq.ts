import { RealtimeDatabase } from "./class.realtimedatabase";

export interface FaqInterface {
  creator: {
    name: string;
    position: string;
  },
  description: string;
  index: number;
  title: string;
}

export class Faq extends RealtimeDatabase<FaqInterface> {

  constructor() {
    super();
    this.dataBaseValue = 'faqs';
  }

}
