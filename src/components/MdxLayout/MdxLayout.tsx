import { Frontmatter } from "@/types";
import { Anchor, Button, Container, Text, Title } from "@mantine/core";
import { IconArrowLeft, IconBug } from "@tabler/icons-react";
import Head from "next/head";
import Link from "next/link";
import classes from "./MdxLayout.module.css";
import { PageHeaderLink } from "./PageHeaderLink/PageHeaderLink";
import { TableOfContents } from "./TableOfContents";

interface MdxLayoutProps {
  meta: Frontmatter;
  children: React.ReactNode;
}

export function MdxLayout({ meta, children }: MdxLayoutProps) {
  const title = `${meta.title} | Solarius`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta itemProp="name" content={title} key="item-title" />
        <meta property="og:title" content={title} key="og-title" />
        <meta name="twitter:title" content={title} key="twitter-title" />
        <meta
          property="og:url"
          content={`https://kb.solarius.me/q/${meta.slug}`}
          key="og-url"
        />
      </Head>
      <article>
        <header className={classes.header}>
          <Container size="md">
            <Anchor component={Link} href="/" underline="hover" fz="sm">
              <Button
                variant="subtle"
                radius="xl"
                leftSection={<IconArrowLeft size={18} stroke={1.5} />}
              >
                Back to all questions
              </Button>
            </Anchor>

            <Title className={classes.title}>{meta.title}</Title>

            <nav className={classes.links}>
              <PageHeaderLink
                icon={<IconBug size={18} stroke={1.5} />}
                link={`mailto:support@solarius.me?subject=Issue with ${meta.title}`}
              >
                Report an issue to Solarius
              </PageHeaderLink>
            </nav>

            <Text c="dimmed" fz="xs" mt="md">
              Last updated{" "}
              <Text
                component="time"
                dateTime={new Date(meta.last_updated_at).toLocaleDateString()}
                c="var(--mantine-color-text)"
                inherit
              >
                {meta.last_updated_at}
              </Text>
            </Text>
          </Container>
        </header>
        <Container size="md" className={classes.inner}>
          <div className={classes.content} id="mdx">
            {children}
          </div>
          <TableOfContents />
        </Container>
      </article>
    </>
  );
}

export function Layout(meta: Frontmatter) {
  return ({ children }: { children: React.ReactNode }) => (
    <MdxLayout meta={meta}>{children}</MdxLayout>
  );
}
