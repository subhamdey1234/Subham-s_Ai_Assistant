import React from 'react';
import axios from "axios";
import { useState } from 'react';
function Main() {
 const [input,setinput]=useState("");
 const [answer,setanswer]=useState("");
    async function generateresponse() {
    setanswer("Loading....");
    
   const response= await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyArAiXhf5Y7l2ZZa9ka_6aX8Xswy4c0ho4",
        method:"post",
        data:{
            "contents": [{
              "parts":[{"text": input}]
              }]
             }
    })
    let responsetext = response['data']['candidates'][0]['content']['parts'][0]['text'];
    let eachword = responsetext.split(" ");
    
    function displayWordsInSetAnswer(words, delay) {
      let index = 0; 
     let displayedText = ""; 
    
      const interval = setInterval(() => {
        if (index < words.length) {
          displayedText += (index > 0 ? " " : "") + words[index]; //conactination of string is done
          setanswer(displayedText); 
          index++;
        } 
      }, delay);
    }
    
    displayWordsInSetAnswer(eachword, 50);
  
    
}

  return (
    <div className='main-section min-h-screen '>
   <div className='card w-full rounded-lg m-auto max-h-[80vh] overflow-auto fixed mt-[110px] 
          lg:ms-[580px] md:ms-[110px] sm:ms-4 sm:w-[90%] md:w-[70%] lg:w-[600px] max-w-[600px]'>
                    <div className='card-header bg-slate-700 border-b-2 border-b-green-500'>
          <h1 className='text-center text-2xl font-bold rounded-lg p-2  underline text-green-300 '>
            Chat Assistant
          </h1>
        </div>
        <div className='card-body'>
          <input onChange={(e)=>{
             setinput(e.target.value);
          }}
          value={input}
            type='text'
            placeholder='<   Enter Any Questions   >'
            className=' font-bold  w-full p-2 border-[3.5px]  border-t-green-500 border-b-blue-500 border-r-blue-500 border-l-green-500 rounded-full placeholder:text-white placeholder:text-center placeholder:font-semibold bg-transparent text-white'
          />
          <div style={{textAlign:"center"}}><button className=' bg-green-400   text-black font-bold w-[150px] hover:bg-red-500 hover:text-white mt-3 h-[35px] rounded-full p-0' onClick={generateresponse}>send</button></div>
          
          <h1 className='text-white text-center font-bold   text-3xl mt-4 border-b-2 border-b-green-300'>Response</h1>
          <div className=' m-auto'>
          <pre  className='text-white bg-transparent text-balance rounded-lg mt-2 font-semibold '><code className='  text-justify'>{answer}</code></pre>
</div>
          <footer className=' bg-black text-center text-white w-full mt-5  bottom-0 border-t-2 border-t-green-300'><p className=' font-extrabold lg:text-2xl sm:text-sm'>CREATED BY   <a href="https://kaleidoscopic-semolina-79c190.netlify.app/" className=' hover:text-green-300'>  @SUBHAM DEY</a></p></footer>

        </div>
      </div>
    </div>
  );
}

export default Main;
