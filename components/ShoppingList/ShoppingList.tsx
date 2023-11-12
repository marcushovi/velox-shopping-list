"use client";

import {
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  Checkbox,
  Button,
  ActionIcon,
} from "@mantine/core";
import classes from "./ShoppingList.module.css";
import { IconPhoto, IconDownload, IconArrowRight, IconHeart, IconArchive, IconEdit, IconTrash } from "@tabler/icons-react";
import { sampleShoppingLists } from "../../data/shoppingLists";


export function ShoppingList() {
  const rows = sampleShoppingLists.map((row) => {
    return (
      <Table.Tr key={row.id}>
        <Table.Td> <Anchor href={"/shoppingList/" + row.id }>{row.name}</Anchor></Table.Td>
        <Table.Td>
          <ActionIcon
            variant="transparent"
            size="xl"
            aria-label="Edit button"
          >
            <IconEdit />
          </ActionIcon>
        </Table.Td>
        <Table.Td>
          <ActionIcon
            variant="transparent"
            size="xl"
            color="green"
            aria-label="Archive button"
          >
            <IconArchive />
          </ActionIcon>
        </Table.Td>
        <Table.Td>
          <ActionIcon
            variant="transparent"
            size="xl"
            color="red"
            aria-label="Delete button"
          >
            <IconTrash />
          </ActionIcon>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
