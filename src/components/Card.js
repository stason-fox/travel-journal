import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';


export default function Card(props) {
    return (
        <div className="card--page">
            <div className="card--container">
                <img src={`../images/${props.item.imageUrl}`} alt="location" className="location-image" />
                <div className="card--text-container">
                    <div className="card--google-maps">
                        <span className="card--marker"><FaMapMarkerAlt /></span>
                        <span className="card--location">{props.item.location}</span>
                        <span className="card--maps-link"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                    </div>
                    <h1>{props.item.title}</h1>
                    <div className="dates">
                        <span>{props.item.startDate} - </span>
                        <span>{props.item.endDate}</span>
                    </div>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}