import { React, useEffect, useState }  from "react";
import EventsCalendar from "../../Pages/Events/Calendar";
import style from './Events.module.scss';
import MobileCalendar from "./MobileCalendar";

const useResize = () => {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      const getSize = () => 
        setSize([window.innerWidth, window.innerHeight]);
      getSize();
      window.addEventListener("resize", getSize);
      return () => window.removeEventListener("resize", getSize);
    }, []);
      return size;
  };
  
  const Events = () => {
    if (window.innerWidth > 768) {
      return <div className={style.eventsPage}>
      <h1 className={style.h1}>Узнай о наших ближайших мероприятиях</h1>
      <EventsCalendar />
      </div>
    } else {
      return <div className={style.eventsPage}>
      <h1 className={style.h1}>Узнай о наших ближайших мероприятиях</h1>
      < MobileCalendar />
      </div>
    }
  }

export default Events;
