import './ChatMessage.css'
import userProfileImage from '../assets/download (4).jpeg'
import botProfileImage from '../assets/I will design your creative logo in 24hrs.jpeg'


function ChatMessage({message, sender}){            //its a component for the each chat
                return(
                    <div className={sender === 'user'? 'chat-message-user': 'chat-message-bot'}>
                        {sender === 'boat' && <img src={botProfileImage} className='profile-image-bot' />}
                        <div className='chat-messages'>{message}</div>
                        {sender === 'user' && <img src={userProfileImage} className='profile-image-user' />}
                    </div>
                );
            }

            // function useAutoScroll(dependencies){
            //     const containerRef = useRef(null);
            
            //     useEffect(() =>{
            //         const containerElement = containerRef.current
            //         if (containerElement){
            //             containerElement.scrollTop = containerElement.scrollHeight;
            //         }
            //     },dependencies)
            //     return containerRef
            // }

            export default ChatMessage