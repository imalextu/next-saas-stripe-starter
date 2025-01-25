import "@/styles/globals.css";
import { fontGeist, fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import { cn, constructMetadata } from "@/lib/utils";


// import { setGlobalDispatcher, ProxyAgent } from 'undici'


// export function setupGlobalProxy() {
//   // 检查是否存在代理环境变量
//   const proxyUrl = process.env.HTTP_PROXY || process.env.http_proxy
//   console.log('proxyUrl', proxyUrl)
//   if (proxyUrl) {
//     try {
//       setGlobalDispatcher(new ProxyAgent(proxyUrl))
//       console.log('全局代理已设置:', proxyUrl)
//     } catch (error) {
//       console.error('设置全局代理时出错:', error)
//     }
//   }
// }

// setupGlobalProxy()

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
