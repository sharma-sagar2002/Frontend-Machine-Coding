import { Box, Button, Checkbox, Stack, TextField, Typography } from '@mui/material'
import  { useState } from 'react'
interface Task {
    checked : boolean, 
    text : string ,
    // id :number 
}
 const TodoList = ()=> {
    const [list , setList] = useState< Task []>([])
    const [taskName , setTaskName] = useState<string>('')
    // const [checked , setChecked ] = useState<boolean>(false)

    const handleAddTask = ()=>{
        setList([...list, {checked: false, text:taskName}])
        setTaskName('')
    }

    const handleDeleteTask = (ind : number )=>{
      setList(list.filter((_ ,index : number )=> (ind!==index)))
    }

    const handleChecked = (ind : number )=>{
     const newList =  list.map((item :Task, index :number  )=> (  ind ===index? {...item , checked: !item?.checked} : item ))
     setList(newList)
    }
    
  return (
    <>
    <Stack gap={2} width={1/2} margin={"auto"}>
    <Typography sx={{alignSelf:'center'}} variant='h4' fontWeight={700}>TODO List</Typography>
     <Stack direction={"row"} gap={3}>
      <TextField fullWidth  value={taskName} onChange={(e)=> setTaskName(e.target.value)} />
      <Button variant='contained' onClick={handleAddTask}>Add</Button>
     </Stack>

        { list.length>0 && 
            <Stack gap={1} p={3} sx={{backgroundColor: 'beige', borderRadius:'10px'}}>
            {
            list.map((item :Task, index : number )=>{
                return (
                   <Box sx={{display:'flex', flexDirection:'row !important' , justifyContent:'space-between', gap:'30px'}}>
                    <Stack direction={"row"}>
                    <Checkbox checked={item?.checked} onClick={ ()=>{handleChecked(index)}}/>
                    <Typography sx={{alignSelf:'center', textDecoration: item?.checked ? 'line-through': 'none'}}>{item ?.text}</Typography>
                    </Stack>
                     <Button onClick={()=>{handleDeleteTask(index)}} variant='contained'>Delete</Button>
                    </Box>
                )
            })
        }
             </Stack>
        }
    
    </Stack>
     </>
  )
}

export default TodoList

