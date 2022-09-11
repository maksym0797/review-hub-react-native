import {Models} from '@rematch/core';
import {authorization} from './authorization';

export interface RootModel extends Models<RootModel> {
  authorization: typeof authorization;
}

export const models: RootModel = {authorization};
