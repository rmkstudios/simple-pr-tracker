import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

function Delete(props) {
  // The id of the element to be deleted is passed into the function
  async function deleteDocument(id) {
    let request = await deleteDoc(doc(db, "workouts", id));
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="link"
        padding="12px 0 12px 0"
      />
      <MenuList>
        <MenuItem
          icon={<SmallCloseIcon />}
          onClick={() => deleteDocument(props.id)}
        >
          Delete Workout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default Delete;
