import React from 'react';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <>
      <div className="timer_container">
        <div className="timer">
          <div className="clock">
            <div>
              <p>Days</p>
              <p className="countdown">{timerDays}</p>
            </div>
            <div>
              <p>Hours</p>
              <p className="countdown">{timerHours}</p>
            </div>
            <div>
              <p>Minutes</p>
              <p className="countdown">{timerMinutes}</p>
            </div>
            <div>
              <p>Seconds</p>
              <p className="countdown">{timerSeconds}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
