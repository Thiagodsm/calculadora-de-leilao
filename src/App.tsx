import { ThemeProvider } from "./components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import DateCalculator from "./components/DateCalculator";
import HolidayList from "./components/HolidayList";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col">
        <header className="p-2">
          <ModeToggle />
        </header>
        <main className="flex-grow mt-4">
          <DateCalculator />
          <HolidayList />
          <InfoSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;