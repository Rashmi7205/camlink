import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();
  
  const time = now.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
  const date = (new Intl.DateTimeFormat('en-US',{
    dateStyle:'full'
  })).format(now);
  

  return (
  <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-[url("/images/hero-background.png")]'>
          <div className='flex h-full flex-col justify-between max-md:px-5 max-md-py-8 lg:p-11'>
            <h1 className='glassmorphism rounded max-w-[270px] text-base text-center font-normal my-5 py-2 '>Upcoming Meeting at :10 :30 am</h1>
            <div className="flex flex-col gap-2 mb-8">
              <h1 className='text-3xl font-bold'>
                {time}
              </h1>
              <p className='text-lg font-md text-sky-200 lg:text-2xl'>{date}</p>
            </div>
          </div>
      </div>
      <MeetingTypeList/>
  </section>
  )
}

export default Home