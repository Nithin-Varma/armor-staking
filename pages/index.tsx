import PageLayout from '@/components/page-layout';
import { VStack, Text } from '@chakra-ui/react';


const IndexPage = () => {

  return (
    <>
      <PageLayout
        title='Home'
        description='Discover a starter kit which includes Next.js, Chakra-UI, Framer-Motion in Typescript. You have few components, Internationalization, SEO and more in this template ! Enjoy coding.'
      >
        <VStack width={'100%'} minH='fit-content'>
          <Text>Nithin</Text>
        </VStack>
      </PageLayout>
    </>
  );
};

export default IndexPage;
