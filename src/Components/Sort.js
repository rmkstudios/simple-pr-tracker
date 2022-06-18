import React from "react";
import { Menu, MenuButton, MenuList, MenuGroup } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { BiFilterAlt } from "react-icons/bi";
import SortMenuItem from "./SortMenuItem";

function Sort() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<BiFilterAlt />}
        colorScheme="orange"
        borderBottom="3px solid #A73500"
      />
      <MenuList fontSize="14px">
        <MenuGroup title="Sort By..">
          <SortMenuItem text="All" />
          <SortMenuItem text="Bench Press" />
          <SortMenuItem text="Deadlift" />
          <SortMenuItem text="Barbell Squat" />
          <SortMenuItem text="Tricep Cable" />
          <SortMenuItem text="Lat Pulldown" />
          <SortMenuItem text="Calf Raises" />
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default Sort;
