import React, { useState } from 'react';

type ItemType = {
  id: number;
  name: string;
  unit?: string;
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

  const updateItem = (id: number, field: keyof ItemType, value: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return { items, addItem, removeItem, updateItem };
};

export default useManageList;
