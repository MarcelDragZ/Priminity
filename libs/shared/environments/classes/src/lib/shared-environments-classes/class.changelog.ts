import { RealtimeDatabase } from "./class.realtimedatabase";

export interface ChangelogInterface {
  name: string;
}

export class Changelog extends RealtimeDatabase<ChangelogInterface> {

  constructor() {
    super();
    this.dataBaseValue = 'changelogs';
  }

}
