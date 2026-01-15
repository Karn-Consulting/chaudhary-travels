import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import EmployeeTransport from "./pages/EmployeeTransport";
import GetQuote from "./pages/GetQuote";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Fleet from "./pages/Fleet";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/employee-transport" component={EmployeeTransport} />
      <Route path="/get-quote" component={GetQuote} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/fleet" component={Fleet} />
      <Route path="/services" component={Home} /> {/* Redirect services to home for now as it has features section */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster position="top-center" richColors />
        <Router />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
