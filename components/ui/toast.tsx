"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

type ToastProps = {
  title?: string;
  description: string;
  variant?: "default" | "destructive";
  duration?: number;
};

export function Toast({ title, description, variant = "default", duration = 3000 }: ToastProps) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <ToastPrimitive.Provider>
      <ToastPrimitive.Root
        open={open}
        onOpenChange={setOpen}
        className={`
          rounded-lg shadow-lg p-4
          ${variant === "destructive" 
            ? "bg-red-50 border border-red-200" 
            : "bg-white border border-gray-200"}
          data-[state=open]:animate-slideIn
          data-[state=closed]:animate-hide
        `}
      >
        <div className="flex justify-between items-start">
          <div>
            {title && (
              <ToastPrimitive.Title className={`text-sm font-medium 
                ${variant === "destructive" ? "text-red-700" : "text-gray-900"}
              `}>
                {title}
              </ToastPrimitive.Title>
            )}
            <ToastPrimitive.Description className={`
              mt-1 text-sm
              ${variant === "destructive" ? "text-red-600" : "text-gray-600"}
            `}>
              {description}
            </ToastPrimitive.Description>
          </div>
          <ToastPrimitive.Close className="ml-4 p-1 rounded-full hover:bg-gray-100 transition-colors">
            <X className="w-4 h-4 text-gray-500" />
          </ToastPrimitive.Close>
        </div>
      </ToastPrimitive.Root>
      
      <ToastPrimitive.Viewport className="fixed top-4 right-4 w-[360px] flex flex-col gap-2 z-[100]" />
    </ToastPrimitive.Provider>
  );
}
