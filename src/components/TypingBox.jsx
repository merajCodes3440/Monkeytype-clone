import React, { useState,useEffect,useRef,useMemo,createRef } from 'react'
import { generate} from "random-words";
import UpperManu from './UpperManu';
import { useTestMode } from '../context/TestModeContext';
import Stats from "./Stats"

// var randomWords =require("random-words");

const TypingBox=()=> {

  const {testTime} =useTestMode();
  const [intevalId,setIntervalId] = useState(null);
  const [countDown,setCountDown] = useState(testTime);
  const [testStart,setTestStart] = useState(false);
  const [testEnd,setTestEnd] = useState(false);
  const [correctChars,setCorrectChars] =useState(0);
  const [incorrectChars,setIncorrectChars]= useState(0);
  const [missedChars,setMissedChars] =useState(0);
  const [extraChars,setExtraChars] =useState(0);
  const [correctWords,setCorrectWords] =useState(0);
  const [graphData, setGraphData]=useState([]);
  const [wordArray , setWordArray] = useState(()=>{
    return generate(50);
  })
  const [currWordIndex,setCurrWordIndex] = useState(0);
  const [currCharIndex,setCurrCharIndex] = useState(0);

  const inputRef =useRef(null);

  const startTimer =()=>{
    const intarvalId = setInterval(timer,1000);
    setIntervalId(intarvalId);

    function timer(){
      setCountDown((latestCountDown)=>{

        setCorrectChars((correctChars)=>{
           setGraphData((graphData)=>{
              return [...graphData,[
                testTime-latestCountDown+1,
                (correctChars/5)/((testTime-latestCountDown+1)/60)
              ]]
           })
           return correctChars;
        })

        if(latestCountDown===1){
          setTestEnd(true);
          clearInterval(intarvalId);
          return 0;
        }
        return latestCountDown-1; 
      });
    }
  }
   
  const resetTest=()=>{
    clearInterval(intevalId);
    setCountDown(testTime);
    setCurrCharIndex(0);
    setCurrWordIndex(0);
    setTestEnd(false);
    setTestStart(false);
    setWordArray(generate(50));
    resetWordSpanRefClassName();
    focusInput()
  }
  const resetWordSpanRefClassName=()=>{
    wordsSpanRef.map((i)=>{
       Array.from(i.current.childNodes).map((j)=>{
        j.className="";
       })
    })
    wordsSpanRef[0].current.childNodes[0].className="current"
  }

  function handleUserInput(e){

    if(!testStart){
      startTimer();
      setTestStart(true);

    }
     const allCurrChars = wordsSpanRef[currWordIndex].current.childNodes;

     if (e.keyCode === 32) {
      // logic for space

      let correctCharsInWord = wordsSpanRef[currWordIndex].current.querySelectorAll("current");
        
        if(correctCharsInWord === allCurrChars.length){
           setCorrectWords(correctWords+1);
        }

      if(allCurrChars.length<=currCharIndex){
        // remove curson from the last place in the word
        allCurrChars[currCharIndex-1].classList.remove("current-right");
      }
      else{
        // remove cursor from in between of the word
        setMissedChars(missedChars + (allCurrChars.length-currCharIndex));
        allCurrChars[currCharIndex].classList.remove("current");
      }

       wordsSpanRef[currWordIndex+1].current.childNodes[0].className ="current";
       setCurrWordIndex(currWordIndex+1);
       setCurrCharIndex(0);
      return;
    }
    if(e.keyCode===8){
      // logic for backspace
     
      if(currCharIndex!==0){

        if(allCurrChars.length===currCharIndex){

          if(allCurrChars[currCharIndex-1].className.includes("extra")){
            allCurrChars[currCharIndex-1].remove();
            allCurrChars[currCharIndex-2].className+=" current-right"
          }
          else{
            allCurrChars[currCharIndex-1].className ='current';
          }
           
           setCurrCharIndex(currCharIndex-1);
           return;
        }
        allCurrChars[currCharIndex].className="";
        allCurrChars[currCharIndex-1].className="current";
        setCurrCharIndex(currCharIndex-1);
      }
      return;
    }
     
    if(currCharIndex===allCurrChars.length){
      let newSpan =document.createElement("span");
      newSpan.innerText = e.key;
      newSpan.className ="incorrect extra correct-right";
      allCurrChars[currCharIndex-1].classList.remove("current-right");
      wordsSpanRef[currWordIndex].current.append(newSpan);
      setCurrCharIndex(currCharIndex+1);
      setExtraChars(extraChars+1);
      return;
    }
     
     if(e.key==allCurrChars[currCharIndex].innerText){
         allCurrChars[currCharIndex].className="correct";
         setCorrectChars(correctChars+1);
        // console.log("correct");
        // console.log(e.key)
     }
     else{
        allCurrChars[currCharIndex].className="incorrect";
        setIncorrectChars(incorrectChars+1);
      // console.log("incorrect");
     }

     if(currCharIndex+1 === allCurrChars.length){
      allCurrChars[currCharIndex].className += " current-right";
     }
     else{
      allCurrChars[currCharIndex+1].className="current";
     }

     setCurrCharIndex(currCharIndex+1);
  }

  const wordsSpanRef = useMemo(()=>{
    return Array(wordArray.length).fill(0).map(i=>createRef(null))
  },[wordArray])

 // console.log(wordsSpanRef);
  const calculateWPM =()=>{
    return Math.round((correctChars/5)/(testTime/60));
  }

  const calculateAcc =()=>{
    return Math.round((correctWords/currWordIndex)*100)
  }

  const focusInput=()=>{
    inputRef.current.focus()
  }
  
  useEffect(()=>{
    resetTest();
  },[testTime]);

  useEffect(()=>{
    focusInput();
    wordsSpanRef[0].current.childNodes[0].className = 'current';

  },[])

  return (
    <div className='typingBox-main-div'>
      <UpperManu countDown ={countDown}/>
         {(testEnd)?(<Stats 
            wpm={calculateWPM()}
            accuracy ={calculateAcc()}
            correctChars={correctChars}
            incorrectChars={incorrectChars}
            missedChars={missedChars}
            extraChars={extraChars}
            graphData={graphData}
         />)
          : (<div className="words" onClick={focusInput}>
           {wordArray.map((word,index)=>(
            <span className='word' ref={wordsSpanRef[index]} key={index}>{word.split('').map((char,charIndex)=>(
              <span key={charIndex} >{char}</span>
            ))}</span>
           ))}
         </div>)}

         <input 
         type="text"
         className="hidden-input"
         onKeyDown={handleUserInput}
         ref={inputRef}
          />
    </div>
    
  )
}

export default TypingBox