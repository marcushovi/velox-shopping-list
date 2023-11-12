'use client';

import { Group } from "@mantine/core";
import { TaskList } from "../../../components/TaskList/TaskList";
import { SideMenu } from "../../../components/SideMenu/SideMenu";

export default function ShoppingList({ params }: { params: { id: number } }) {
  return (
    <>
      <Group>
        <SideMenu />
        <TaskList id={params.id} />
      </Group>
    </>
  );
  }