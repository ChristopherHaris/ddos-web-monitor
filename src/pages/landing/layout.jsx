import Bottombar from "@/components/landing/Bottombar";
import dynamic from "next/dynamic";

const Topbar = dynamic(() => import("@/components/landing/Topbar"), {
  ssr: false,
});

export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Topbar />
          <main>{children}</main>
          <Bottombar />
        </body>
      </html>
    </>
  );
}
