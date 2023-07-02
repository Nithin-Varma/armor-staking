import {
    Heading,
    Avatar,
    Flex,
    Box,
    Center,
    Text,
    Stack,
    Button,
    HStack,
    VStack,
    Link,
    Badge,
    useColorModeValue,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function PoolCards() {
    const dir = useBreakpointValue({ base: 'column', md: 'row' });
    return (
    // <Flex direction={['column', 'row']} >
      <Center py={4}>
        <Stack direction={dir} spacing={8}>
        <Box
        //   maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          borderWidth="2px"
          borderRadius={'2xl'}
          style={{
            borderImage: 'linear-gradient(to left, rgba(255, 255, 37, 1), rgba(83, 219, 255, 1), rgba(255, 85, 243, 1), rgba(83, 219, 255, 1), rgba(255, 0, 255, 1)) 1',
          }}
          
          >
            <VStack spacing={8}>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={44} align={'start'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'background-logo.png'
                        }
                        mb={4}
                        pos={'relative'}
                    />
                    <VStack>
                        <Text fontWeight={'bold'} fontSize={'2xl'}>ArmorAI</Text>
                        <Text fontWeight={'thin'}>Will be locked</Text>
                        <Button>1 days</Button>

                    </VStack>
                </Stack>
                <VStack spacing={4}>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={56} align={'start'}>
                        <Text>Current APY:</Text>
                        <Text>100%</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={64} align={'start'}>
                        <Text>Earn</Text>
                        <Text fontWeight={'bold'}>Armor</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={'56'} align={'start'}>
                        <Text>Current APY:</Text>
                        <Text>100%</Text>
                    </Stack>
                </VStack>
                <Button 
                 paddingX={32}
                 paddingY={32}
                 paddingTop={6} 
                 paddingBottom={6} 
                 bgColor={'purple'}
                 _hover={{
                    bgColor: 'purple.900'
                 }}
                 >
                    Enable Stacking</Button>
                <VStack spacing={4}>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={52} align={'start'}>
                        <Text>You Stacked</Text>
                        <Text>0.0 ARMOR</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={52} align={'start'}>
                        <Text>Your Reward</Text>
                        <Text fontWeight={'bold'}>0.0 ARMOR</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={40} align={'start'}>
                        <Text>Totak Stacked in Pool</Text>
                        <Text>0.0 ARMR</Text>
                    </Stack>
                </VStack>

            </VStack>
          
        </Box>
        <Box
        //   maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          borderWidth="2px"
          borderRadius={'2xl'}
          style={{
            borderImage: 'linear-gradient(to left, rgba(255, 255, 37, 1), rgba(83, 219, 255, 1), rgba(255, 85, 243, 1), rgba(83, 219, 255, 1), rgba(255, 0, 255, 1)) 1',
          }}
          
          >
            <VStack spacing={8}>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={44} align={'start'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'background-logo.png'
                        }
                        mb={4}
                        pos={'relative'}
                    />
                    <VStack>
                        <Text fontWeight={'bold'} fontSize={'2xl'}>ArmorAI</Text>
                        <Text fontWeight={'thin'}>Will be locked</Text>
                        <Button>1 days</Button>

                    </VStack>
                </Stack>
                <VStack spacing={4}>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={56} align={'start'}>
                        <Text>Current APY:</Text>
                        <Text>100%</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={64} align={'start'}>
                        <Text>Earn</Text>
                        <Text fontWeight={'bold'}>Armor</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={'56'} align={'start'}>
                        <Text>Current APY:</Text>
                        <Text>100%</Text>
                    </Stack>
                </VStack>
                <Button 
                 paddingX={32}
                 paddingY={32}
                 paddingTop={6} 
                 paddingBottom={6} 
                 bgColor={'purple'}
                 _hover={{
                    bgColor: 'purple.900'
                 }}
                 >
                    Enable Stacking</Button>
                <VStack spacing={4}>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={52} align={'start'}>
                        <Text>You Stacked</Text>
                        <Text>0.0 ARMOR</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={52} align={'start'}>
                        <Text>Your Reward</Text>
                        <Text fontWeight={'bold'}>0.0 ARMOR</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={40} align={'start'}>
                        <Text>Totak Stacked in Pool</Text>
                        <Text>0.0 ARMR</Text>
                    </Stack>
                </VStack>

            </VStack>
          
        </Box>
        <Box
        //   maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          borderWidth="2px"
          borderRadius={'2xl'}
          style={{
            borderImage: 'linear-gradient(to left, rgba(255, 255, 37, 1), rgba(83, 219, 255, 1), rgba(255, 85, 243, 1), rgba(83, 219, 255, 1), rgba(255, 0, 255, 1)) 1',
          }}
          
          >
            <VStack spacing={8}>
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={44} align={'start'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'background-logo.png'
                        }
                        mb={4}
                        pos={'relative'}
                    />
                    <VStack>
                        <Text fontWeight={'bold'} fontSize={'2xl'}>ArmorAI</Text>
                        <Text fontWeight={'thin'}>Will be locked</Text>
                        <Button>1 days</Button>

                    </VStack>
                </Stack>
                <VStack spacing={4}>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={56} align={'start'}>
                        <Text>Current APY:</Text>
                        <Text>100%</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={64} align={'start'}>
                        <Text>Earn</Text>
                        <Text fontWeight={'bold'}>Armor</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={'56'} align={'start'}>
                        <Text>Current APY:</Text>
                        <Text>100%</Text>
                    </Stack>
                </VStack>
                <Button 
                 paddingX={32}
                 paddingY={32}
                 paddingTop={6} 
                 paddingBottom={6} 
                 bgColor={'purple'}
                 _hover={{
                    bgColor: 'purple.900'
                 }}
                 >
                    Enable Stacking</Button>
                <VStack spacing={4}>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={52} align={'start'}>
                        <Text>You Stacked</Text>
                        <Text>0.0 ARMOR</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={52} align={'start'}>
                        <Text>Your Reward</Text>
                        <Text fontWeight={'bold'}>0.0 ARMOR</Text>
                    </Stack>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={40} align={'start'}>
                        <Text>Totak Stacked in Pool</Text>
                        <Text>0.0 ARMR</Text>
                    </Stack>
                </VStack>

            </VStack>
          
        </Box>
        </Stack>
      </Center>
    );
  }