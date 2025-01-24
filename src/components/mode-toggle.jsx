import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleMode}
      className={`${theme === "dark" ? "rotate-0" : "rotate-180"} mx-4`}
    >
      <Sun className="text-orange-500 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 duration-500 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="text-blue-500 absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 duration-500  transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
