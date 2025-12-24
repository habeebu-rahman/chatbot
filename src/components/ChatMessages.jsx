import ChatMessage from "./ChatMessage";
import { useRef, useEffect } from 'react'
import './ChatMessages.css'

function ChatMessages({chatMessage}){

                    const chatMessageRef = useAutoScroll([chatMessage]);
                    
                    function useAutoScroll(dependencies){
                                    const containerRef = useRef(null);
                                
                                    useEffect(() =>{
                                        const containerElement = containerRef.current
                                        if (containerElement){
                                            containerElement.scrollTop = containerElement.scrollHeight;
                                        }
                                    },[dependencies])
                                    return containerRef
                                }
                
                    return(
                        <div className={chatMessage.length===0?'chat-message-container-welcome':'chat-message-container'} ref={chatMessageRef }>
                            {chatMessage.length===0 && (            //like if statement
                                <h3 className='welcome-message'>Welcome to the chatbot! Send a message using the textbox.</h3>
                            )}
                        {chatMessage.map((chatMessage) =>{
                            return(
                                    <ChatMessage
                                        message={chatMessage.message}
                                        sender={chatMessage.sender}
                                        key={chatMessage.id}
                                    />
                                );
                        })}</div>
                    );
            }

            export default ChatMessages