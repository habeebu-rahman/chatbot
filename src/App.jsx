import { useState } from 'react'
import './App.css'
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';

function App(){             //its the main component that we rendering

                const [chatMessage,setChatMessage] = useState(
                    [
                    /*{message:'hello, chat boat',sender:'user',id:crypto.randomUUID()},
                    {message:'hey, how can i help you',sender:'boat',id:crypto.randomUUID()},
                    {message:'what day is toady',sender:'user',id:crypto.randomUUID()},
                    {message:'toady is december 14',sender:'boat',id:crypto.randomUUID()}*/
                    ]
                );

                return(
                    <div className='main-container'>
                        <ChatMessages chatMessage={chatMessage}/>
                        <ChatInput chatMessage={chatMessage} setChatMessage={setChatMessage}/>
                    </div> //we are using component in multiple times
                );
            }

export default App
