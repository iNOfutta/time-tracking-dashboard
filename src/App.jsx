import { useState } from "react";
import "./App.css";

function App() {
  const [scheduleType, setScheduleType] = useState("daily");

  const getCurrentScheduleType = ()=>scheduleType === "daily"? "day": scheduleType === "weekly"? "week": "month";

  const setActiveScheduleType = (type)=>getCurrentScheduleType() === type? "active": "hover";

  const schedules = [
    {
      type: "Work",
      daily: ["5hrs", "7hrs"],
      weekly: ["32hrs", "36hrs"],
      monthly: ["103hrs", "128hrs"],
      bgImage: "images/icon-work.svg",
      bgColor: "hsl(15, 100%, 70%)",
    },

    {
      type: "Play",
      daily: ["1hr", "2hrs"],
      weekly: ["10hrs", "8hrs"],
      monthly: ["23hrs", "29hrs"],
      bgImage: "images/icon-play.svg",
      bgColor: "hsl(195, 74%, 62%)",
    },

    {
      type: "Study",
      daily: ["0hrs", "1hr"],
      weekly: ["4hrs", "7hrs"],
      monthly: ["13hrs", "19hrs"],
      bgImage: "images/icon-study.svg",
      bgColor: "hsl(348, 100%, 68%)",
    },

    {
      type: "Exercise",
      daily: ["1hr", "1hr"],
      weekly: ["4hrs", "5hrs"],
      monthly: ["11hrs", "18hrs"],
      bgImage: "images/icon-exercise.svg",
      bgColor: "hsl(145, 58%, 55%)",
    },

    {
      type: "Social",
      daily: ["1hr", "3hrs"],
      weekly: ["5hrs", "10hrs"],
      monthly: ["21hrs", "23hrs"],
      bgImage: "images/icon-social.svg",
      bgColor: "hsl(264, 64%, 52%)",
    },

    {
      type: "Self Care",
      daily: ["0hrs", "1hr"],
      weekly: ["2hrs", "2hrs"],
      monthly: ["7hrs", "11hrs"],
      bgImage: "images/icon-self-care.svg",
      bgColor: "hsl(43, 84%, 65%)",
    },
  ];

  return (
    <>
      <main>
        <div className="cards-container">
          <div className="main-card">
            <div className="main-card__inner-card">
              <div className="avatar"></div>
              <ul className="avatar__name">
                <li>Report for</li>
                <li>
                  <strong>Jeremy Robson</strong>
                </li>
              </ul>
            </div>
            <ul className="main-card__content">
              <li><a href="#" onClick={()=>setScheduleType("daily")} className={setActiveScheduleType("day")}>Daily</a></li>
              <li><a href="#" onClick={()=>setScheduleType("weekly")}  className={setActiveScheduleType("week")}>Weekly</a></li>
              <li><a href="#" onClick={()=>setScheduleType("monthly")}  className={setActiveScheduleType("month")}>Monthly</a></li>
            </ul>
          </div>

          {schedules.map(schedule=><div className="card" key={schedule.type} style={{backgroundImage: `url(${schedule.bgImage})`, backgroundColor: schedule.bgColor}}>
            <div className="inner-card">
              <ul className="card__title">
                <li>{schedule.type}</li>

                <li className="card__options">
                  <div className="card__dot"></div>
                  <div className="card__dot"></div>
                  <div className="card__dot"></div>
                </li>
              </ul>
              <ul className="card__info">
                <li>{schedule[scheduleType][0]}</li>
                <li>Last {getCurrentScheduleType()} - {schedule[scheduleType][1]}</li>
              </ul>
            </div>
          </div>)}
          
        </div>
      </main>

      <AuthorInfo />
    </>
  );
}

const AuthorInfo = () => {
  return (
    <div class="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Albano Futa</a>.
    </div>
  );
};

export default App;
