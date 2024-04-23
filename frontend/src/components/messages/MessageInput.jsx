import { useState ,useEffect } from "react";
import { BsSend } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  

  

  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
   
      await sendMessage(message);
      setMessage(""); // Clear the message input
  };

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
      
        <input
          type='text'
          className='border  text-sm rounded-lg block w-10/12 p-2.5 ml-11 bg-gray-700 border-gray-600 text-white '
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0  end-0  pe-3 w-12 flex justify-center items-center bg-blue-700 rounded-lg'>
          {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
      </div>
      <Toaster/>
    </form>
  );
};

export default MessageInput;
