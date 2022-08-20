/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */

import AsyncStorage from '@react-native-async-storage/async-storage';

export abstract class Storage {
  private key = '@gofinance';

  constructor(protected entityName: string) {}

  protected async getItem() {
    return AsyncStorage.getItem(`${this.key}:${this.entityName}`);
  }

  protected async setItem(data: string) {
    AsyncStorage.setItem(`${this.key}:${this.entityName}`, data);
  }

  protected async removeItem() {
    AsyncStorage.removeItem(`${this.key}:${this.entityName}`);
  }
}
