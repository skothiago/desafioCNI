import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Box>
    <Flex border='1px' borderColor='gray.200'>
    <h1>teste</h1>
    </Flex>
   </Box>
  )
}

export default App
