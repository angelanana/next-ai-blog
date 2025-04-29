"use client";

import { createContext, useContext } from "react";

interface ToastOptions {
  title?: string;
  description: string;
  variant?: "default" | "destructive";
  duration?: number;
}

interface ToastContextType {
  toast: (options: ToastOptions) => void;
}

export const ToastContext = createContext<ToastContextType>({
  toast: () => {}
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toast = (options: ToastOptions) => {
    const { title, description } = options;
    console.log(`Toast: ${title} - ${description}`);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
