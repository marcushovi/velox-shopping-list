import { Center, Grid, Group } from "@mantine/core";
import { ShoppingList } from "../components/ShoppingList/ShoppingList";
import { SideMenu } from "../components/SideMenu/SideMenu";

export default function App() {
  return (
    <>
      <Group>
        <SideMenu />
        <ShoppingList />
      </Group>
    </>
  );
}
