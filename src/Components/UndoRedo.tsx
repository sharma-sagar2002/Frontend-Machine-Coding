import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react"

const UndoRedo = () => {
    const [text , setText ]  = useState<string>('');
    const [history, setHistory] = useState<string []> ([""]);
    const [currInd , setCurrInd] = useState<number>(0);

    const handleChange =  (e: any) =>{
       const newVal = e.target.value 
       const newHistory  = history.slice(0, currInd+1);
       const updatedHistory  = [...newHistory, newVal]
       setHistory(updatedHistory)
       setCurrInd(updatedHistory.length-1);
       setText(newVal)

       console.log(text,updatedHistory.length-1, updatedHistory)
    }

    const handleRedo = ()=>{
      if(currInd===history.length-1) return ;
      const newInd  = currInd+1;
      setCurrInd(newInd);
      setText(history[newInd])
    }

    const handleUndo = ()=>{
      if(currInd===0) return ;
      const newInd = currInd-1;
      setCurrInd((newInd));
      setText(history[newInd] )
    }

  return (
    <>
    <Stack gap={2} width={1/2} sx={{margin: 'auto', p:20}}> 
        <Typography variant="h4" alignSelf={"center"} fontWeight={800}>Undo Redo</Typography>
       <Stack gap={3}>
        <TextField value={text} onChange={ (e:any)=> {handleChange(e)}}/>
        <Stack gap={2} direction={"row"}>
            <Button disabled = {currInd === history.length-1} onClick={handleRedo}>Redo</Button>
            <Button disabled ={currInd === 0} onClick={handleUndo}>Undo</Button>
        </Stack>
       </Stack>
       </Stack>
    </>
  )
}

export default UndoRedo