"use client"

import * as React from "react"
import { type ThemeProviderProps } from "next-themes/dist/types"

const initialState = {
  theme: "system",
  setTheme: (_theme: string) => {},
  themes: ['light', 'dark'],
  applyTheme: (_theme: string[]) => {}
};

const ThemeProviderContext = React.createContext<typeof initialState>(initialState);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<string>(props.defaultTheme ?? 'system');

  React.useEffect(() => {
    const storedTheme = localStorage.getItem(props.storageKey ?? 'theme');
    if (storedTheme) {
      setThemeState(storedTheme);
    }
  }, [props.storageKey]);

  const applyTheme = (newColors: string[]) => {
    const root = document.documentElement;
    const colorMap = ['--primary', '--accent', '--secondary']; // Example mapping
    newColors.slice(0, colorMap.length).forEach((color, index) => {
      // Assuming hex colors, we need to convert them to HSL for shadcn
      let r = 0, g = 0, b = 0;
      if (color.length === 4) {
        r = parseInt(color[1] + color[1], 16);
        g = parseInt(color[2] + color[2], 16);
        b = parseInt(color[3] + color[3], 16);
      } else if (color.length === 7) {
        r = parseInt(color.substring(1, 3), 16);
        g = parseInt(color.substring(3, 5), 16);
        b = parseInt(color.substring(5, 7), 16);
      }
      
      r /= 255; g /= 255; b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h=0, s=0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }

      const hsl_string = `${(h * 360).toFixed(0)} ${(s * 100).toFixed(0)}% ${(l * 100).toFixed(0)}%`;
      root.style.setProperty(colorMap[index], hsl_string);
    });
  }

  const setTheme = (newTheme: string) => {
    localStorage.setItem(props.storageKey ?? 'theme', newTheme);
    setThemeState(newTheme);
    
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
      return
    }
    
    root.classList.add(newTheme)
  };

  React.useEffect(() => {
    setTheme(theme);
  }, [theme]);


  const value = {
    theme,
    setTheme,
    themes: props.themes ?? ['light', 'dark'],
    applyTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
