import { atom, selector } from "recoil";

const counterStateAtom = atom<number>({
  key: "counterStateAtom",
  default: 0,
});

export const counterSelector = selector({
  key: "counterSelector",
  get: ({ get }) => get(counterStateAtom) * 100,
});

export default counterStateAtom;
