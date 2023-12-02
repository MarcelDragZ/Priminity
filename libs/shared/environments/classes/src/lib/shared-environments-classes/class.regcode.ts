import { firstValueFrom, map } from 'rxjs';

import { RealtimeDatabase } from './class.realtimedatabase';

export interface RegCodeInterface {
  position: string;
  key: string;
}

export class RegCode extends RealtimeDatabase<RegCodeInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'regCodes';
  }

  setRegCode(regCodePosition: string) {
    const newRegCode: RegCodeInterface = {
      position: regCodePosition,
      key: `${regCodePosition}-${this.generateKey()}`,
    };
    this.setItem(newRegCode);
  }

  generateKey(): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 10 }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('');
  }

  async checkValidRegCode(enteredRegCode: string) {
    return await firstValueFrom(
      this.getItems$().pipe(
        map((regCode) => {
          const validRegCode = Object.entries(regCode ?? {}).find(
            (value) => value[1].key === enteredRegCode
          );
          if (validRegCode) {
            return validRegCode;
          } else {
            return null;
          }
        })
      )
    );
  }
}
