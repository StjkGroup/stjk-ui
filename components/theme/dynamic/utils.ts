import { ThemeValueChangeEvent } from "../events";

export const resetTheme = () => {
  localStorage.removeItem(ThemeValueChangeEvent().type);
  document.dispatchEvent(ThemeValueChangeEvent());
}