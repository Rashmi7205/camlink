"use client";
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';


const MeetingSetup = ({setIsSetupComplete}:{setIsSetupComplete:(value:boolean)=>void}) => {

  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();
  if(!call) {
    throw new Error('Stream Call Hook Error');
  }

  useEffect(()=>{
    if(isMicCamToggledOn){
      call?.camera.disable();
      call?.microphone.disable();
    }
    else{
      call?.camera.enable();
      call?.microphone.enable();
    }
  },[isMicCamToggledOn,call?.camera ,call?.microphone]);

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
      <h1 className='text-2xl font-bold'>Set up</h1>
      <VideoPreview/>
      <div className='flex items-center justify-center h-16 '> 
        <label className='flex items-center justify-center gap-2 font-medium'>
          <input type="checkbox"
          checked={isMicCamToggledOn}
          onChange={(e)=>setIsMicCamToggledOn(e?.target.checked)}
          />
          Join With mic and Camera Off
        </label>
        <DeviceSettings/>
      </div>
      <Button className='rounded-md bg-green-500 px-4 py-3 '
      onClick={()=>{
        call.join();
        setIsSetupComplete(true);
      }}
      >
        Join Meeting
      </Button>
    </div>
  )
}

export default MeetingSetup