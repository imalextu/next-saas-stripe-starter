import createMiddleware from 'next-intl/middleware';
import { auth } from "@/auth";
import { routing } from './i18n/routing';

// 组合 auth 中间件和 next-intl 中间件
export const middleware = auth((req) => {
  const intlMiddleware = createMiddleware({
    ...routing,
    // 添加重定向配置
    localeDetection: false  // 禁用自动语言检测
  });
  return intlMiddleware(req);
});

// 修改 matcher 配置以正确匹配所有路由
// 实际效果：
// ✅ 会匹配：/guides, /about, /contact
// ✅ 会匹配：/en/guides, /de/about
// ❌ 不会匹配：/api/auth, /_next/static, /image.jpg
export const config = {
  matcher: [
    // 匹配所有无语言前缀的路由
    '/((?!api|_next|_vercel|.*\\..*|de|en).*)',
    // 匹配带有语言前缀的路由
    '/(de|en)/:path*'
  ]
};