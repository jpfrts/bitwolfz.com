import Head from "next/head";
import StyledComponentsRegistry from "../../lib/registry";
import "./globals.css";

export const metadata = {
  title: "BitWolfz",
  description: "Site oficial do duo BitWolfz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
