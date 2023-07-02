import PageLayout from '@/components/page-layout';
import { VStack, Text, Box } from '@chakra-ui/react';
import { BackgroundImage } from '@/components/Background-Image';


const IndexPage = () => {

  return (
    <>
      <PageLayout
        title='Home'
        description='Discover a starter kit which includes Next.js, Chakra-UI, Framer-Motion in Typescript. You have few components, Internationalization, SEO and more in this template ! Enjoy coding.'
      >
        <Box>
          <BackgroundImage />
          <VStack width={'100%'} minH='fit-content'>
            
          </VStack>
        </Box>
      </PageLayout>
    </>
  );
};

export default IndexPage;
