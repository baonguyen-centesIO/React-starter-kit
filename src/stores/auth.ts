import {
  StateStorage,
  StorageValue,
  createJSONStorage,
  persist,
} from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

// Constants
import { STORE_KEY } from '@/constants/auth';


const DEFAULT_VALUE = {
  user: null,
};

const getItem: StateStorage['getItem'] = (key: string) => {
  const response: string = localStorage.getItem(key) || '';
  const defaultValue: string = JSON.stringify(DEFAULT_VALUE);

  if (response) {
    return response;
  }

  return defaultValue;
};

const setItem: StateStorage['setItem'] = (key: string, value: string) => {
  const {
    state: { user },
  }: StorageValue<any> = JSON.parse(value); // should update any
  const hasUser: boolean = !!user && !!Object.keys(user).length;

  if (hasUser) {
    return localStorage.setItem(key, value);
  }

  return localStorage.removeItem(key);
};

const myStore: () => StateStorage = (): StateStorage => ({
  setItem,
  getItem,
  removeItem: localStorage.removeItem.bind(localStorage),
});

export const authStore = createWithEqualityFn(
  persist<any>( // should update any
    (set) => ({
      ...DEFAULT_VALUE,
      updateStore: (data: Partial<any>) => set(data), // should update any
      clearStore: () => set(DEFAULT_VALUE),
    }),
    {
      name: STORE_KEY.AUTH,
      storage: createJSONStorage(myStore),
    },
  ),
);


// sample to get data from store
// const user = authStore((state): any['user'] => state.user);
