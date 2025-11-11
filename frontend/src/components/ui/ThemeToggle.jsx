import { useTheme } from "../../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const handleClick = () => {
    console.log("Button clicked, current theme:", theme); // Debug log
    toggleTheme();
  };
  return (
    <>
      {/* {theme === "light" ? (
        <button onClick={toggleTheme} className="cursor-pointer">
          <Moon />
        </button>
      ) : (
        <button onClick={toggleTheme} className="cursor-pointer">
          <Sun />
        </button>
      )} */}
      <button
        onClick={handleClick}
        className="relative p-2 rounded-lg bg-card hover:bg-green/10 transition-all duration-300 border border-border"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-text" />
        ) : (
          <Sun className="w-5 h-5 text-green" />
        )}
      </button>
    </>
  );
};
export default ThemeToggle;
