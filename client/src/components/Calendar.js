import { Scheduler } from "@aldabil/react-scheduler";
import React from "react";

function Schedule() {
  return (
    <React.Fragment>
      <div className="calendarContainer">
        <Scheduler
          view="month"
          events={[
            {
              event_id: 1,
              title: "Event 1",
              client: "Client",
              start: new Date("2021/5/2 09:30"),
              end: new Date("2021/5/2 10:30"),
            },
            {
              event_id: 2,
              title: "Event 2",
              start: new Date("2021/5/4 10:00"),
              end: new Date("2021/5/4 11:00"),
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
}

export default Schedule;
