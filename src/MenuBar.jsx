import styled from "styled-components";
import { DiCodeBadge } from "react-icons/di";
import {BiMedal, BiHome} from "react-icons/bi";
import { Icon } from "@chakra-ui/react";
import {HiOutlineAcademicCap} from "react-icons/hi";
import { Tooltip } from "@chakra-ui/react";

const Menu = styled.div`
  height: 100%;
  display: grid;
  background-color: white;
  grid-template-rows: repeat(1fr, 4);
  text-align: center;
  justify-items: center;
  align-items: center;
`;

const MenuItem = styled.div`
  display: grid;
  align-items: center;
  height: 100%;
  width: 100%;
  &:hover {
    background-color: #6f96df4b;
    transition: .4s ease-in-out;
    color:white;
    cursor: pointer;
  }
`;
export default function MenuBar() {
  return (
    <Menu>
      <MenuItem>
        <Tooltip label="Home" fontSize="md"  hasArrow placement="auto-start">
          <span>
            <Icon as={BiHome} color="primary" w={10} h={10} />
          </span>
        </Tooltip>
      </MenuItem>

      <MenuItem>
        <Tooltip label="Check out my projects" fontSize="md" hasArrow placement="auto-start">
          <span>
            <Icon as={DiCodeBadge} color="primary" w={10} h={10} />
          </span>
        </Tooltip>
      </MenuItem>
      <MenuItem>
        <Tooltip label="Achievements" fontSize="md" hasArrow placement="auto-start">
          <span>
            <Icon as={BiMedal} color="primary" w={10} h={10} />
          </span>
        </Tooltip>
      </MenuItem>
      <MenuItem>
        <Tooltip label="CV & Skills" fontSize="md" hasArrow placement="auto-start">
          <span>
            <Icon as={HiOutlineAcademicCap} color="primary" w={10} h={10} />
          </span>
        </Tooltip>
      </MenuItem>
    </Menu>
  );
}
