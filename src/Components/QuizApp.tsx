import { Button, Radio, Stack, Typography } from "@mui/material"
import { useState } from "react"
interface Question {
        id :number ,
        ques :string ,
        options : string []
    }
interface Answer {id :number , ans :string } 
type QuizAppProps = {
    questionList : Question[],
    answerList :Answer []
}

const QuizApp = ( {questionList, answerList} : QuizAppProps) => {

    const [opt, setOpt] = useState<undefined | string >(undefined);
    const [currInd, setCurrInd] = useState<number>(0);
    const [status , setStatus] = useState<boolean | undefined>(false)

      const currentQues = questionList[currInd]
    const handleSubmit = ()=>{
        const ans = answerList.find((a: Answer)=> a.id === currentQues?.id)
        if(opt === ans?.ans) {
          
          setStatus(true)
          setCurrInd((prev)=>prev+1)
        }
        else {
          setStatus(false)
        }
    }


  return (
    <>
    <Stack gap={2}  width={1/2}  margin={"auto"} > 
        <Typography variant="h2" fontWeight={700}>Quiz App</Typography>
        <Stack gap={2}>
            <Typography>{currentQues?.ques}</Typography>
            <Stack>
              {
                currentQues?.options?.map((option: string)=> (<Stack direction={"row"} gap={1}><Radio value={option}  checked={opt === option} onClick={(e:any)=>{setOpt(e.target.value)} }/> <Typography>{option}</Typography></Stack>))
              }
            </Stack>
        </Stack>

        <Button onClick={handleSubmit} >Submit</Button>
        {status!==undefined && <Typography sx={{font: '2px solid' ,fontSize: '16px', color: !status? 'red' : 'green'}}>{status ? undefined : 'You are wrong'}</Typography>}

    </Stack>
    </>
  )
}

export default QuizApp