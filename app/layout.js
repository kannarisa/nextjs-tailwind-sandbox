import MenuContextProvider from "@/context/MenuContext";
import MainLayout from "./components/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Nextjs Tailwind Sandbox",
  description: "This is a tutorial project from DevSutichai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
