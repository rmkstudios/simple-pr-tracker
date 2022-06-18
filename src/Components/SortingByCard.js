import React from "react";
import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { AppContext } from "../AppContext";

function SortingByCard() {
  const { sortedBy, setSortedBy } = useContext(AppContext);

  return (
    <div className="sortingBy" onClick={() => setSortedBy("All")}>
      <IconButton
        variant="outline"
        colorScheme="blackAlpha"
        aria-label="Reset Filter"
        icon={<CloseIcon />}
        size="xs"
        marginRight="10px"
      />
      sorting by {sortedBy}
    </div>
  );
}

export default SortingByCard;
