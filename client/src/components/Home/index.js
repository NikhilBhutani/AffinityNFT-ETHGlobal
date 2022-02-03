import React, { useContext } from 'react'
import { Button } from '@chakra-ui/button';
import { useHistory } from 'react-router';
import { Flex } from '@chakra-ui/layout';
// import { Title } from '../Title';

function Home() {
    return (
      <div className="App">
        <>
            {/* <Title
                title="Welcome To Creator NFT Dao"
                infoLinkText="Learn more about NFT DAO"
                infoLink=""
            /> */}
            <Flex
                id="home-page-content"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
                pt={10}
            >
                {
                        <Button
                            rounded="full"
                            bg={'main.primary'}
                            color="text.secondary"
                            _hover={{
                                bg: 'main.primary_hover'
                            }}
                            width="full"
                        >
                            Upload NFT
                        </Button>
                    
                }
            </Flex>
        </>
      </div>
    );
  }
  
export default Home;
