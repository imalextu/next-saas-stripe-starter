import "@/styles/globals.css";
import { fontGeist, fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import { cn, constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
          fontGeist.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
