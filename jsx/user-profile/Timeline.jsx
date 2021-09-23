import React from 'react';
import Button from 'react-bootstrap/Button.js';

import './../../style/user-profile/timeline.css';


function getFormattedTime(dateISO) {
    let a = dateISO.split(/[^0-9]/);
    let creationDate = new Date(Date.UTC(a[0], a[1] - 1, a[2], a[3], a[4], a[5]));

    const DATE = creationDate.getDate();
    const MONTH = creationDate.toLocaleString('default', {month: 'short'});
    const HOURS = creationDate.getHours();
    const MINUTES = creationDate.getMinutes();
    const SECONDS = creationDate.getSeconds();
    return `${HOURS}:${MINUTES}:${SECONDS} ${DATE} ${MONTH}`;
}

const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag  w-100 text-center mb-1" style={{background: data.category.color}}>
                {data.category.tag}
            </span>
            <time>{getFormattedTime(data.date)}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle"/>
        </div>
    </div>
);

export default class Timeline extends React.Component {
    render() {
        return (
            this.props.data.length > 0 && (
                <div>
                    <div className="timeline-container">
                        {this.props.data.map((data, idx) => (
                            <TimelineItem data={data} key={idx}/>
                        ))}
                    </div>
                    <div className={"mx-auto text-center mt-2"}>
                        <Button variant="outline-dark">Посмотреть предыдущие</Button>
                    </div>

                </div>

            )
        )
    }
}
