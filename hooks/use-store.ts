import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEY = 'BibleStudy_v0.2';
const FONT_SIZE_MIN = 16;
const FONT_SIZE_MAX = 30;
type ThemeType = 'dark' | 'light' | 'system';

interface AppState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  fontSize: number;
  incrementFontSize: () => void;
  decrementFontSize: () => void;
}

const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      fontSize: 16,
      setTheme: (theme) => set({ theme }),
      incrementFontSize: () => {
        if (get().fontSize < FONT_SIZE_MAX) {
          set({ fontSize: get().fontSize + 2 });
        }
      },
      decrementFontSize: () => {
        if (get().fontSize > FONT_SIZE_MIN) {
          set({ fontSize: get().fontSize - 2 });
        }
      },
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStore;
