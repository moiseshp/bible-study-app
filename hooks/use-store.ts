import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEY = 'BibleStudy_v0.2';

type ThemeType = 'dark' | 'light' | 'system';

interface AppState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  fontSize: number;
  setFontSize: (fontSize: number) => void;
}

const useStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'system',
      fontSize: 16,
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStore;
