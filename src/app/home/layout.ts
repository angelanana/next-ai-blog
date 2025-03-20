import { ReactNode } from "react";
import Script from "next/script";

export default function HomeLayout({ children} : { children: ReactNode }) {
  return (
    <>
        <section>{children}</section>
        <Script src="https://example.com/script.js" />
    </>
  )
}