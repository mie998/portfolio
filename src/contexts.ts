import { createContext } from 'react';

type DeviceSizeContext = {
  smartPhoneMin: number;
  smartPhoneMax: number;
  padMin: number;
  padMax: number;
};

const defaultSize: DeviceSizeContext = {
  smartPhoneMin: 300,
  smartPhoneMax: 430,
  padMin: 768,
  padMax: 1024,
};

export const DeviceSizeContext = createContext(defaultSize);
