import { create } from 'zustand';

interface countStore {
  count: number;
  text: string;

  increaseCount: () => void;
  decreaseCount: () => void;
  removeAllCount: () => void;
}

const useCountStore = create<countStore>((set) => ({
  count: 0,
  text: '-',

  increaseCount: () => set((state: any) => ({ count: state.count + 1, text: '증가중' })),
  decreaseCount: () => set((state: any) => ({ count: state.count - 1, text: '감소중' })),
  removeAllCount: () => set({ count: 0, text: '리셋!' }),
}));

export default useCountStore;
