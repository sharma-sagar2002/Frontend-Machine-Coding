import { Button, Stack, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"

const Stopwatch = () => {
    const [timer , setTimer] =useState<number>(0)
    const intervalRef = useRef<null | number>(null)

    const handleStop = ()=>{
    if(intervalRef.current!==null) {
        console.log(intervalRef)
        clearInterval(intervalRef.current)
        intervalRef.current = null
        
      }
 }

    const handleReset = ()=>{
         handleStop()
         setTimer(0)
    }

    const handleStart = ()=>{
        if(intervalRef.current!==null) return ;
         intervalRef.current = window.setInterval(()=>{
         setTimer((prev)=>prev+1)
      },1000)

      console.log(intervalRef)
    }

    useEffect(()=>{
        return ()=>handleStop()
    }, [])


  
  return (
    <>

    <Stack width={1/2} p={10} sx={{margin : 'auto', textAlign:'center'}} gap={3} >
        <Typography sx={{alignSelf:'center'}} variant="h4" fontWeight={800}>Stopwatch</Typography>
        <Stack gap={2}>
            <Typography variant="h4" fontWeight={600}>{`Time : ${timer}`}</Typography>
            <Stack gap={1} direction={"row"}>
                <Button onClick={()=>{handleStart()}}>Start</Button>
                <Button onClick={()=>{handleStop()}}> Stop</Button>
                <Button onClick={()=>{handleReset()}}>Reset</Button>
            </Stack>
        </Stack>
    </Stack>
    </>
  )
}

export default Stopwatch