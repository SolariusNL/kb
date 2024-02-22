import SolariusLogo from "@/components/Icons/Solarius";
import {
  Anchor,
  AppShell,
  Button,
  Container,
  Group,
  RemoveScroll,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { IconMail } from "@tabler/icons-react";
import cx from "clsx";
import Link from "next/link";
import classes from "./Shell.module.css";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([["mod + J", toggleColorScheme]]);

  return (
    <AppShell header={{ height: 60 }} className={classes.root}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="md" className={classes.inner}>
          <Link href="/" className={cx("mantine-focus-auto", classes.logo)}>
            <SolariusLogo height={30} />
          </Link>
        </Container>
      </AppShell.Header>
      <AppShell.Main className={classes.main}>
        <div className={classes.content}>{children}</div>
      </AppShell.Main>

      <footer className={classes.footer}>
        <Container size="md" h="100%">
          <Group justify="space-between" align="center" h="100%">
            <Text c="dimmed" fz="sm">
              &copy; 2021-{new Date().getFullYear()} Solarius B.V.
            </Text>
            <Anchor href="mailto:support@solarius.me">
              <Button
                variant="subtle"
                radius="xl"
                leftSection={<IconMail size={18} stroke={1.5} />}
              >
                Contact Solarius support
              </Button>
            </Anchor>
          </Group>
        </Container>
      </footer>
    </AppShell>
  );
}
