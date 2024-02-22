import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantinex/demo/styles.css";
import "@mantinex/mantine-header/styles.css";
import "@mantinex/mantine-logo/styles.css";
import "@mantinex/shiki/styles.css";
import "../fonts/GreycliffCF/styles.css";

import { MantineProvider } from "@mantine/core";
import { ShikiProvider } from "@mantinex/shiki";
import Head from "next/head";
import { Shell } from "../components/Shell";
import { cssVariablesResolver, theme } from "../theme";

async function loadShiki() {
  const { getHighlighter } = await import("shikiji");
  const shiki = await getHighlighter({
    langs: ["tsx", "scss", "html", "bash", "json"],
  });

  return shiki;
}

export default function App({ Component, pageProps }: any) {
  const title = "Help Center | Solarius";
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
      <Head>
        <title>{title}</title>
        <meta itemProp="name" content={title} key="item-title" />
        <meta property="og:title" content={title} key="og-title" />
        <meta name="twitter:title" content={title} key="twitter-title" />
        <meta
          property="og:url"
          content="https://kb.solarius.me/"
          key="og-url"
        />
        <meta
          name="description"
          content="Frequently asked questions for Solarius services"
        />
        <meta
          itemProp="description"
          content="Frequently asked questions for Solarius services"
        />
        <meta name="keywords" content="solarius,framework,faq,questions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="og:type" content="website" />
      </Head>
      <Shell>
        <ShikiProvider loadShiki={loadShiki}>
          <Component {...pageProps} />
        </ShikiProvider>
      </Shell>
    </MantineProvider>
  );
}
