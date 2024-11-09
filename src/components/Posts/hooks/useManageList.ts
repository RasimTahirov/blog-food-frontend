import React, { useState } from 'react';

type ItemType = {
  id: number;
  name: string;
};

const useManageList = (initialItems: ItemType[] = []) => {
  const [items, setItems] = useState<ItemType[]>(initialItems);

  const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setItems([...items, { id: Date.now(), name: '' }]);
  };

  const removeItem = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    setItems(items.filter((item) => item.id !== id));
  };

  return { items, addItem, removeItem };
};

export default useManageList;
