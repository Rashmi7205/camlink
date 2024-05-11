"use client";

import { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast"


const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const [values, setValues] = useState({
    dateTime:new Date(),
    description:'',
    link:''
  })

  const [callDetails, setCallDetails] = useState<Call>();

  const router = useRouter();
  const {toast} = useToast();
  const user = useUser();
  const client= useStreamVideoClient();

  const createMeeting = async ()=>{
      if(!client || !user) return;
      try {
          if(!values.dateTime){
            toast({
              title:"Please Select a Date and Time"
            })
            return ;
          }
          const id = crypto.randomUUID();
          const call = client.call('default',id);
          if(!call) throw new Error('Failed To cretae new call ');
        
          const startsAt = values.dateTime.toISOString()||new Date(Date.now()).toISOString()

          const description = values.description || "Instant Meeting";
          await call.getOrCreate({
            data:{
              starts_at:startsAt,
              custom:{
                description
              }
            }
          });        
          setCallDetails(call);
          if(!values.description){
            router.push(`/meetings/${call.id}`);
          }
          toast({
            title:"Meeting Created Successfully"
          })
        } catch (error) {
          console.log(error);
          toast({title:"Failed To Create Meeting"});
      }
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="icons/add-meeting.svg"
        title="New Meeting"
        description="Start an Instant Meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}
        className="bg-orange-400"
      />
      <HomeCard
        img="icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your Meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-blue-400"
      />
      <HomeCard
        img="icons/join-meeting.svg"
        title="join Meeting"
        description="via invitation link"
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className="bg-purple-400"
      />
      <HomeCard
        img="icons/recordings.svg"
        title="View Recordings"
        description="check out your  Recordings"
        handleClick={() => router.push("/recordings")}
        className="bg-yellow-400"
      />
    <MeetingModal 
    isOpen={meetingState==='isInstantMeeting'}
    onClose={()=>{setMeetingState(undefined)}}
    className="text-center"
    title="Start an instant meeting"
    buttonText="Start Meeting"
    handleClick={createMeeting}
    />
    </section>
  );
};

export default MeetingTypeList;
