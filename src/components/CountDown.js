import React from 'react'

const CountDown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);

  const tick = () => {

    if (h === 0 && m === 0 && s === 0) {
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };



  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p style={{textAlign: "center"}}>
      Ошибка!<br/>Вы превысили количетсво запросов.<br/>Обновите страницу через{" "}
        {`${m
        .toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}.</p>
    </div>
  );
};

export default CountDown