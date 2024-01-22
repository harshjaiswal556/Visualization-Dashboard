import React from 'react'
import Card from 'react-bootstrap/Card';

// we are returning a dynamic bootstrap card
const CardsForData = ({ item }) => {
    return (
        <div className='cardDiv'>
            <Card bg='light' border='dark' style={{ width: '27rem' }}>
                <div className="row">
                    <div className="col">

                        <div className="card card-margin">

                            <div className="card-body ">
                                <div className="widget-49">
                                    <div className="widget-49-title-wrapper">
                                        <div className="widget-49-date-primary">
                                            <span className="widget-49-date-day">22</span>
                                            <span className="widget-49-date-month">DEC</span>
                                        </div>
                                        <div className="widget-49-meeting-info">
                                            <h6 style={{ fontWeight: 700 }}>Project Details</h6>
                                            <span className="widget-49-meeting-time">{item.sector ? item.sector : "Sector"}</span>
                                        </div>
                                    </div>

                                    <Card.Text className='cardText'>
                                        <ul className="widget-49-meeting-points">

                                            <li className="widget-49-meeting-item"> {item.topic ? item.topic : "No Info"} </li>
                                            <li className="widget-49-meeting-item">  {item.title ? item.title : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.insight ? item.insight : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.url ? item.url : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.region ? item.region : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.country ? item.country : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.source ? item.source : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.pestle ? item.pestle : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.start_year ? item.start_year : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.end_year ? item.end_year : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.added ? item.added : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.published ? item.published : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.intensity ? item.intensity : "No Info"} </li>
                                            <li className="widget-49-meeting-item"> {item.likelihood ? item.likelihood : "No Info"} </li>
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