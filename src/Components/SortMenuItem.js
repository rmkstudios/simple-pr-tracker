import { IoIosFitness } from "react-icons/io";
import { MenuItem } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

function SortMenuItem({ text }) {
  const { setSortedBy } = useContext(AppContext);
  return (
    <MenuItem icon={<IoIosFitness />} onClick={() => setSortedBy(text)}>
      {text}
    </MenuItem>
  );
}

export default SortMenuItem;
