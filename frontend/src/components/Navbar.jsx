import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { CiCloudMoon, CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';

const Navbar = () => {
    const { colorMode, toggleColorMode} = useColorMode();

    return (
    <Container maxW={"1140px"} px={4}>
        <Flex 
            h={16}
            alighItem={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <Text
                bgGradient='linear(to-r, cyan.400, blue.500)'
                bgClip='text'
                fontSize={{base: "22", sm: "28"}}
                fontWeight='bold'
                textTransform={"uppercase"}
                textAlign={"center"}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text> 
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"create"}>
                    <Button>
                        <CiSquarePlus fontSize="20" />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <CiCloudMoon /> : "☀️"}
                </Button>
            </HStack>

        </Flex>

    </Container>
  )
}

export default Navbar