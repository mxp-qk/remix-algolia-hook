import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix / Algolia",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "3rem",
            marginLeft: "10rem",
            marginRight: "10rem",
          }}
        >
          <h1>Remix / Algolia</h1>
          <nav>
            <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
              <li>
                <Link to="with-widget">With Widget</Link>
              </li>
              <li>
                <Link to="with-hook">With Hook</Link>
              </li>
              <li>
                <Link to="with-widget-ssr">With Widget SSR</Link>
              </li>
              <li>
                <Link to="with-hook-ssr">With Hook SSR</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
