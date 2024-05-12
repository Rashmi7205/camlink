"use client";
import Loader from '@/components/Loader';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useState } from 'react';

const Meeting = ({params:{id}}:{params:{id:string}}) => {

  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const {call,isCallLoading} = useGetCallById(id);

  const {user,isLoaded} = useUser();

  if(!isLoaded || isCallLoading){
    return <Loader/>  
  }
  return (
  <div className='w-full h-screen'>
      <StreamCall call={call}>
          <StreamTheme>
            {
                !isSetupComplete ?(
                 <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
                ):(
                  <MeetingRoom/>
                )
            }
          </StreamTheme>
      </StreamCall>
    </div>
  )
}

export default Meeting