import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/app/App";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SelectedSkipContext } from "@/contexts/selected-skip";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <SelectedSkipContext>
          <App />
        </SelectedSkipContext>
        <Toaster position="top-center" richColors />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
