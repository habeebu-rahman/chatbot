import { useState } from 'react'
import {Chatbot} from 'chatbotmodule'
import lodingImage from '../assets/loading-spinner.gif'
import './ChatInput.css'


function ChatInput({chatMessage, setChatMessage }){           //its a component for the send massage
                const [inputText,setInputText] = useState('')

                function saveInputText(event){
                    setInputText(event.target.value);
                }
                async function sendMessage(){
                    const newChatMessages = [
                        ...chatMessage,{
                            message:inputText,
                            sender:'user',
                            id:crypto.randomUUID()
                        }
                    ]
                    setChatMessage(newChatMessages);
                    // for thinking...
                    setChatMessage([
                        ...newChatMessages,{
                            message:<div className='loading-message'><span className='thinking-message'>Thinking</span><img src={lodingImage} className='loading-gif' alt=''/></div>,
                            sender:'boat',
                            id:crypto.randomUUID()
                        }
                    ]);
                    // const response = Chatbot.getResponse(inputText)
                    const response = await Chatbot.getResponseAsync(inputText)
                    setChatMessage([
                        ...newChatMessages,{
                            message:response,
                            sender:'boat',
                            id:crypto.randomUUID()
                        }
                    ]);setInputText('')
                    }
                    function keyDownEnter(event){
                        if(event.key == 'Enter'){
                            sendMessage()
                        }
                        if(event.key == 'Escape'){
                            setInputText('')
                        }
                    }
                return(
                    <div className='chat-input-section'>
                        <input
                            type="text"
                            placeholder='type to the boat'
                            size='35'
                            onChange={saveInputText}
                            value={inputText}
                            onKeyDown={keyDownEnter}
                            className='input-box'
                        />
                        <button onClick={sendMessage} className='send-button'>send</button>
                    </div>
                );
            }
            export default ChatInput