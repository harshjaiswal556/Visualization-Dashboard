import React from 'react'
import Card from 'react-bootstrap/Card';

// we are returning a dynamic bootstrap card
const CardsForData = ({ item, index }) => {
    return (
        <div className='cardDiv'>
            <Card bg='light' border='primary' style={{ width: '27rem' }}>
                <div className="row">
                    <div className="col">

                        <div className="card card-margin">

                            <div className="card-body ">
                                <div className="widget-49">
                                    <div className="widget-49-title-wrapper">
                                        <div className="widget-49-date-primary">
                                            <span className="widget-49-date-day">{index + 1}</span>
                                        </div>
                                        <div className="widget-49-meeting-info">
                                            <h6 style={{ fontWeight: 700 }}>Project Details</h6>
                                            <span className="widget-49-meeting-time">{item.sector ? item.sector : "Sector"}</span>
                                        </div>
                                    </div>

                                    <Card.Text className='cardText'>
                                        <ul className="widget-49-meeting-points">

                                            <li className="widget-49-meeting-item"> <strong>Topic: </strong> {item.topic ? item.topic : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Title: </strong> {item.title ? item.title : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Insight: </strong> {item.insight ? item.insight : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>URL: </strong> {item.url ? item.url : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Region: </strong> {item.region ? item.region : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Country: </strong> {item.country ? item.country : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Source: </strong> {item.source ? item.source : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Pestle: </strong> {item.pestle ? item.pestle : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Start Year: </strong> {item.start_year ? item.start_year : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>End Year: </strong> {item.end_year ? item.end_year : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Added: </strong> {item.added ? item.added : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Published: </strong> {item.published ? item.published : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Intensity: </strong> {item.intensity ? item.intensity : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> <strong>Likelihood: </strong> {item.likelihood ? item.likelihood : "No Info"} </li>
                                        </ul>
                                    </Card.Text>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </Card>
        </div>
    )
}

export default CardsForData