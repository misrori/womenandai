import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { I18nProvider } from "@/lib/i18n";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <div className="number-marker text-muted-foreground">Error 404</div>
        <h1 className="display text-7xl mt-3">Lost.</h1>
        <p className="mt-4 text-muted-foreground">The page you're looking for has wandered off.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-ink px-6 py-3 text-sm hover:bg-ink hover:text-paper transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Women and AI — A Hungarian community" },
      { name: "description", content: "A bilingual Hungarian community empowering women with AI skills — events, essays, and a knowledge hub." },
      { property: "og:title", content: "Women and AI — A Hungarian community" },
      { property: "og:description", content: "A bilingual Hungarian community empowering women with AI skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <Outlet />
      <Toaster position="bottom-right" />
    </I18nProvider>
  );
}
