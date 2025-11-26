import { Button, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const CaptchaGenerator = () => {
    const [gCaptcha, setGCaptcha] = useState<string>('')
    const [captcha, setCaptcha ] = useState<string>('')
    const [message, setMessage ] = useState<string>('')

    useEffect(()=>{
     setGCaptcha(generateCaptcha({length:5}))
    },[])


    console.log(gCaptcha)
    const validateCaptcha = ()=>{

        gCaptcha === captcha ? setMessage('You are correct !!') : setMessage('You are wrong !!')
        setGCaptcha(generateCaptcha({length:5}))
        setCaptcha('')
    }

    const generateCaptcha = ({length = 5} : {length? : number})=>{
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";

       for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
       }
       return result
    }

    const resetCaptcha = ()=>{
        setGCaptcha(generateCaptcha({length:5}))
        setMessage('')
        setCaptcha('')
    }



  return (
     <>
     <Stack gap={2} width={1/2} margin={"auto"}>
       <Typography>Captcha Generator</Typography>
       <Typography  sx={{backgroundColor:'grey' , p:3, color:'white', fontSize:'18px', fontWeight:'500', userSelect:'none'}}>{gCaptcha}</Typography>
       <TextField value={captcha} onChange={(e)=>{setCaptcha(e.target.value)}} />
       <Stack gap={2} direction={"row"}>
         <Button variant='contained' onClick={validateCaptcha}>Submit</Button>
         <Button variant='contained' onClick={resetCaptcha}>Reset</Button>
       </Stack>
       {
        message!=='' && <Typography>{message}</Typography>
       }
     </Stack>

     </>
  )
}

export default CaptchaGenerator