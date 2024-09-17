import React, { useState } from 'react';
import Navbar from '../Navbar';
import { data } from '../../assets/test';

const Mcaexam = () => {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [lock,setLock]=useState(false)
    const [result,setResult]=useState(false)
    const [score,setScore]=useState(0)
    const checkans = (e, ansIndex) => {
        setSelectedOption(ansIndex); // Set the clicked option
        // if (lock===false)
        // {if (question.ans === ansIndex) {
        //     setCorrect(prev => prev + 1);
        //     setLock(true)
        // } else {
        //     setWrong(prev => prev + 1);
        //     setLock(true)
        // }}
    };

    return (
        <div>
            <Navbar />
            <div className=' flex justify-center'>
            <div className='mt-2 font-bold text-[30px]'>MCA Exam</div>
            </div>
            <div className='w-72 sm:w-[640px] m-auto mt-10 mb-6 text-black flex flex-col gap-[20px] rounded-lg hero-bg-color p-10'>
                <h1>MCA Exam</h1>
                <hr className='h-[2px] border-none bg-[#707070]' />
                {result?<> <div className=' font-bold text-[30px]'>{`Your Score is ${score}`}</div>
                <div>{`Correct = ${correct}`}</div>
                <div>{`Wrong = ${wrong}`}</div>
                </>:
                <>
                <h2 className='text-[27px] font-semibold '>{index + 1}.{question.question}</h2>
                <ul className='flex flex-col'>
                    {[question.option1, question.option2, question.option3, question.option4].map((option, optIndex) => (
                        <li 
                            key={optIndex}
                            onClick={(e) => checkans(e, optIndex + 1)}
                            className={`h-auto pl-4 hero-ag-color p-2 rounded-md mb-5 cursor-pointer 
                                ${selectedOption === optIndex + 1 ? 'bg-black text-white' : ''}`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
                <button 
                    className='m-auto w-32 h-10 bg-green-400 text-white font-semibold rounded-2xl cursor-pointer'
                    onClick={() => {
                        if(selectedOption!==null)
                        {
                            if (question.ans === selectedOption) {
                                setCorrect(prev => prev + 1);
                                setLock(true)
                                setScore(correct-(wrong*0.25)+1) 
                                
                            } else {
                                setWrong(prev => prev + 1);
                                setLock(true)
                                setScore(correct-((wrong+1)*0.25))
                            }}
                        if(index===data.length-1){
                            
                            alert("Exam Finished")
                            setResult(true)
                            return 0
                        }
                            
                            setIndex(prev => prev + 1);
                        setQuestion(data[index + 1]);
                        setLock(false)
                        setSelectedOption(null); // Reset the selected option for the next question
                    
                    }}
                >
                    Next
                </button>
                <div className='m-auto'>{index+1} of {data.length} questions</div>
                
                </>}
               
            </div>
        </div>
    );
};

export default Mcaexam;
