import Header from "@/components/layout/Header";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen space-y-10 font-Quicksand bg-[#f7f7f7] py-10 px-5 overflow-y-auto overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
