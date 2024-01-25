import  { useState, useEffect } from 'react';

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
   
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Set up an interval to update the time every second (1000 milliseconds)
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Format the current time as you need
  const formattedTime = currentTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

  return (
    <div className='mt-12 py-4 flex items-center justify-center bg-white rounded-xl shadow-2xl'>
   <h1 className="text-xl font-title"> <p>&copy; {new Date().getFullYear()} ALGHOUL shop <span className='text-head'> {formattedTime}</span></p>
</h1>
    </div>
  )
}
