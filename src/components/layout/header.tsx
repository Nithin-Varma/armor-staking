import { ReactNode } from 'react';
import {
  Box,
  Image,
  Flex,
  Avatar,
  Link,
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
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box p={8}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image
            boxSize='50px'
            objectFit='cover'
            src='/background-logo.png'
            alt='logo'
          />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} >
              <Button onClick={toggleColorMode}  >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              
              <Button
               bgGradient="linear(to-l, rgba(255, 255, 37, 1), rgba(83, 219, 255, 1), rgba(255, 85, 243, 1), rgba(83, 219, 255, 1), rgba(255, 0, 255, 1))" 
               bgClip="text"
               _hover={{ bgClip: "text" }}
               fontSize={'2xl'}
               >
                Connect Wallet
               </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
// rgba(255, 255, 37, 1), rgba(83, 219, 255, 1), rgba(255, 85, 243, 1), rgba(83, 219, 255, 1), rgba(255, 0, 255, 1)
