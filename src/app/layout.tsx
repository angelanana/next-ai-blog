import { ReactNode } from "react";

export default function HomeLayout({ children} : { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}