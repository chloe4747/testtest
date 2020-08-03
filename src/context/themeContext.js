import { createContext } from 'react';

const ThemeContext = createContext('dark')
export const ThemeContextProvider = ThemeContext.Provider
export const ThemeContextConsumer = ThemeContext.Consumer