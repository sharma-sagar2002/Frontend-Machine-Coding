import { MenuItem, Stack, TextField, Typography } from '@mui/material'
import  { useState } from 'react'

const list = [
   'banana', 'apple', 'cherry','mango','blueberry'
]

const ListSorter = () => {
    const [sortType, setSortType] = useState<'asc' | 'desc' | 'len'>('asc')

     const sortedList = [...list].sort((a, b) => {
    if (sortType === 'asc') return a.localeCompare(b)
    if (sortType === 'desc') return b.localeCompare(a)
    return a.length - b.length // length based
  })
  return (
    <>
     <Stack gap={3}>
        <TextField
        select
        value={sortType}
        onChange={(e)=>setSortType(e.target.value as 'asc' | 'desc' | 'len')}
        >
            <MenuItem value = "asc">Sort (A-Z)</MenuItem>
            <MenuItem value ="desc">Sort (Z-A)</MenuItem>
            <MenuItem value="len">Sort on length</MenuItem>

        </TextField>
        <Stack gap={1}>
            {
                sortedList.map((item:string)=>(<Typography fontWeight={500}>{item}</Typography>))
            }
        </Stack>
     </Stack>
    </>
  )
}

export default ListSorter