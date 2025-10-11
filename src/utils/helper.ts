import { colors } from "./constant";

export const generateUniqueId = (): string => {
  return crypto.randomUUID();
};

export const colorNameToHex = (name: string) => {
  //@ts-ignore
  return colors[name.replace(/\s+/g, "")] ;
};
