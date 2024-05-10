import React, { useState } from 'react'
import { Box, VStack, Input, Button, Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleAuth = () => {
        if(!inputs.email || !inputs.password) {
            alert('Please fill all the fields')
            return
        }
        navigate('/')
    }

    const handleChange = (e) => {
        setInputs((input) => ({ ...input, [e.target.name]: e.target.value }))
    }

    return (
        <>
            <Box border='1px solid gray' borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src='/logo.png' h={24} cursor='pointer' alt='Instagram' />
                    <Input
                        placeholder='Email'
                        fontSize={14}
                        type='email'
                        name='email'
                        value={inputs.email}
                        onChange={(e) => handleChange(e)}
                    />
                    <Input
                        placeholder='Password'
                        fontSize={14}
                        type='password'
                        name='password'
                        value={inputs.password}
                        onChange={(e) => handleChange(e)}
                    />
                    {!isLogin ? (
                        <Input
                            placeholder='Confirm Password'
                            fontSize={14}
                            type='password'
                            name='confirmPassword'
                            value={inputs.confirmPassword}
                            onChange={(e) => handleChange(e)}
                        />
                    ) : null}
                    <Button w='full' colorScheme='blue' size='sm' fontSize={14} onClick={handleAuth}>
                        {isLogin ? 'Log in' : 'Sign Up'}
                    </Button>
                    {/* ------------ OR ------------ */}
                    <Flex alignItems='center' justifyContent='center' my={4} gap={1} w='full'>
                        <Box flex={2} h='1px' bg='gray.400'></Box>
                        <Text mx={1} color='white'>OR</Text>
                        <Box flex={2} h='1px' bg='gray.400'></Box>
                    </Flex>
                    <Flex alignItems='center' justifyContent='center' cursor='pointer'>
                        <Image src='/google.png' w={5} alt='Google logo' />
                        <Text mx='2' color='blue.500'>
                            Log in with Google
                        </Text>
                    </Flex>
                </VStack>
            </Box>
            <Box border='1px solid grey' borderRadius={4} padding={5}>
                <Flex alignItems='center' justifyContent='center'>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                    </Box>
                    <Box color='blue.500' cursor='pointer' onClick={() => setIsLogin((login) => !login)}>
                        {isLogin ? 'Sign Up' : 'Log in'}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm
