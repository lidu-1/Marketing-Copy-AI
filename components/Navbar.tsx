import Link from "next/link";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center justify-between py-6 bg-gray-100 dark:bg-slate-900">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-2xl gradient-text">
            Marketing Copy AI.
          </Link>
        </div>
        <div className="flex items-center">
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={24}
            moonColor={"orange"}
            sunColor={"yellow"}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
