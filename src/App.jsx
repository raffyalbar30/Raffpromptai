import { FaTelegramPlane } from "react-icons/fa";
import './App.css'
import Typed from 'typed.js';
import { useRef, useState } from "react";
import { requestprompt } from "./libs/Groq";
import { Light as SyntaxHighlight } from "react-syntax-highlighter";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect } from "react";





function App() {
    const [Data,setData] = useState([]);
    const [Message, setMessage] = useState([]);
    const [click, setclick] = useState();
    const typedjs = useRef();
    


   //add update all 

    const Handlesumbitmessage = async () => {
           const promptEnginer = await requestprompt(Data);
           setMessage(promptEnginer);
           setclick(true);
      
    }

    const Handlechange = (e) => {
        setData(e.target.value);
    }

 
    useEffect(() => {

      const typed = new Typed(typedjs.current, {
        strings: [
          'Hello you need help ?',
          'Raff Prompt Engineer Ai 🚀🤔',
          'hare, for help you ask my noww 👇'
        ],
        typeSpeed: 100,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        startDelay: 2000,
        fadeOut: true,
      
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
  
    }, []);
  
  return (
    <> 
        <section className="w-full h-full object-cover">
          <main>
         <div className="md:w-1/2 w-full border mx-auto h-auto rounded-lg -z-10">
         <div className='mt-12 p-4'>
             <p className='text-4xl font-semibold text-blue-500'><span ref={typedjs}></span></p>
              <div className='mt-8'>
                    <div className="max-w-md mx-auto">   
                 <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    </svg>
                </div>
                <input type="text" 
                 name='serch' 
                 className="block w-full px-16 p-4 ps-2 text-sm text-gray-900 border
                 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your Message ..." required onChange={Handlechange}/> 
                 <button className=" text-white absolute end-2.5 bottom-2.5
                  bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-4 py-2
                    disabled:opacity-60"
                     onClick={Handlesumbitmessage}
                    ><FaTelegramPlane />
                    </button> 
            </div>
        </div>
              </div>
               {
                 click ?
              <div className="max-w-xl text-left mx-auto p-4 mt-2 rounded-md overflow-y-auto overflow-auto ">
              <SyntaxHighlight language="swift" style={atomOneDark} wrapLongLines={true} className="pl-4 pr-4 text-sm rounded-lg">
                    {Message}
              </SyntaxHighlight>
              </div> 
                : null
               }
               </div>
         </div> 
           </main>
        </section>
    </>
  )
}

export default App
