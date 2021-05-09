import React from 'react';

const DisplayClock = (props) => {
    return(
        <div>
            <span>{props.time.hour >= 10 ? props.time.hour : "0"+props.time.hour}</span>&nbsp; :&nbsp;
            <span>{props.time.min >= 10 ? props.time.min : "0"+props.time.min}</span>&nbsp; :&nbsp;
            <span>{props.time.sec >= 10 ? props.time.sec : "0"+props.time.sec}</span>&nbsp; :&nbsp;
            <span>{props.time.millisec >= 10 ? props.time.millisec : "0"+props.time.millisec}</span>&nbsp;
        </div>
    )
}

export default DisplayClock;