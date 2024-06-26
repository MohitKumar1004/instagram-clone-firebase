import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constans"

const PostFooter = ({ username, isProfilePage }) => {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(1000)
    const handleLike = () => {
        if(liked) {
            setLiked(false)
            setLikes((like) => (like - 1))
        } else {
            setLiked(true)
            setLikes((like) => (like + 1))
        }
    }
    return (
        <Box mb={10} mt='auto'>
            <Flex alignItems='center' gap={4} w='full' pt={0} mb={2} mt={4} cursor='pointer'>
                <Box onClick={handleLike}>
                    {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
                </Box>
                <Box cursor='pointer' fontSize={18}>
                    <CommentLogo />
                </Box>
            </Flex>
            <Text fontWeight={600} fontSize='sm'>
                {likes} likes
            </Text>
            {!isProfilePage && (<>
                <Text fontWeight={700} fontSize='sm'>
                    {username}{" "}
                    <Text as='span' fontWeight={400}>
                        Feeling good
                    </Text>
                </Text>
                <Text color='grey' fontSize='sm'>
                    View all 1000 comments
                </Text>
            </>)}
            <Flex
                alignItems='center'
                gap={2}
                justifyContent='space-between'
                w='full'
            >
                <InputGroup>
                    <Input variant='flushed' placeholder='Add a comment...' fontSize={14} _hover={{ borderRightWidth: 0, borderRightLeft: 0 }} />
                    <InputRightElement>
                        <Button
                            fontSize={14}
                            color='blue.500'
                            fontWeight={600}
                            cursor='pointer'
                            _hover={{ color: 'white' }}
                            bg='transparent'
                        >
                            Post
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    )
}

export default PostFooter
