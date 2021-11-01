import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.3} fontSize="sm">
      &copy; {new Date().getFullYear()} Andy Jung. All Rights Reserved.
    </Box>
  )
}

export default Footer
