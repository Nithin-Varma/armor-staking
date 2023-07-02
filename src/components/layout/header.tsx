import { ReactNode } from 'react';
import {
  Box,
  Image,
  Flex,
  Avatar,
  Link,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';

export default function Header() {
  return (
    <>
      <Box p={8} position={'fixed'}
      >
              <Button
               bgGradient="linear(to-l, rgba(255, 255, 37, 1), rgba(83, 219, 255, 1), rgba(255, 85, 243, 1), rgba(83, 219, 255, 1), rgba(255, 0, 255, 1))" 
               bgClip="text"
               _hover={{ bgClip: "text" }}
               fontSize={'2xl'}
               >
                Connect Wallet
               </Button>
      </Box>
    </>
  );
}
// rgba(255, 255, 37, 1), rgba(83, 219, 255, 1), rgba(255, 85, 243, 1), rgba(83, 219, 255, 1), rgba(255, 0, 255, 1)
