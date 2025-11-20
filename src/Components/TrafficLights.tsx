import { Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'

const TrafficLights = () => {

    const [light , setLight ] = useState<'red' | 'yellow' | 'green'>('red')
    useEffect(()=>{
        const timer = setTimeout(()=>{

            setLight((prev)=> {
                if(prev==='red') setLight('yellow')
                if(prev ==='yellow' ) setLight('green')
                return 'red'
            })

        }, light==='red' ? 3000 : light==='yellow' ? 1000: 2000);

        return ()=>{clearTimeout(timer)}
    })
  return (
    <>
    <Stack gap={2}>
        <Box width={"100px"} height={"100px"} sx={{backgroundColor: light==='red' ? light : 'unset'}}>Red Light</Box>
        <Box width={"100px"} height={"100px"} sx={{backgroundColor: light==='yellow' ? light : 'unset'}}>Yellow Light</Box>
        <Box width={"100px"} height={"100px"} sx={{backgroundColor: light==='green' ? light : 'unset'}}>Green Light</Box>


    </Stack>
    </>
  )
}

export default TrafficLights