import { User, sampleUsers } from './users';

export interface Item {
    id: number;
    name: string;
    resolved: boolean;
  }
  
export interface ShoppingList {
  id: number;
  name: string;
  owner: User;
  archived: boolean;
  members: User[];
  items: Item[];
}

  export const sampleShoppingLists: ShoppingList[] = [
    {
      id: 1,
      name: 'Lidl',
      owner: sampleUsers[0],
      archived: false,
      members: [sampleUsers[0], sampleUsers[1]],
      items: [
        { id: 1, name: 'Milk', resolved: false },
      ],
    },
    {
        id: 2,
        name: 'Kaufland',
        owner: sampleUsers[0],
        archived: false,
        members: [sampleUsers[0], sampleUsers[1]],
        items: [
          { id: 1, name: 'Garlic', resolved: false },
        ],
      },
      {
        id: 3,
        name: 'Tesco',
        owner: sampleUsers[0],
        archived: false,
        members: [sampleUsers[0], sampleUsers[1]],
        items: [
          { id: 1, name: 'Potatos', resolved: false },
        ],
      },
  ];
  