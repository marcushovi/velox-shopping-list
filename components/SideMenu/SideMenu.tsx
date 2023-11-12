'use client';
import { Group, Code, ScrollArea, rem, Image } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react";
import { UserSettings } from "../UserSettings/UserSettings";
import { ActionButton } from "../ActionButton/ActionButton";
import classes from "./SideMenu.module.css";

const mockdata = [{ label: "Dashboard", icon: IconGauge }];


const menuItems: MenuItem[] = [
    {
        label: "Active Lists",
        link: "/active"
    },
    {
        label: "Archived Lists",
        link: "/archived"
    },

]
export function SideMenu() {
const links = menuItems.map((item) => <ActionButton {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Image src="/Velox.svg" fit="contain" w={180} />
          <Code fw={700}>v0.0.1</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        {links}
      </ScrollArea>

      <div className={classes.footer}>
        <UserSettings />
      </div>
    </nav>
  );
}
