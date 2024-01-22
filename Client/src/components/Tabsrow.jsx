import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import CardsForData from './CardsForData';
import AccordionForCharts from './AccordionForCharts';
import Filters from './Filters';
import axios from 'axios';

const Tabsrow = ({ data, setMainData }) => {
    // state to store the number of data cards we want to display at a time, we'll update it on click of a button
    const [limit, setLimit] = useState(3);
    const limitedData = data.slice(0, limit);
    // state to store the search bar text
    const [search, setSearch] = useState("");
    // function to make an api call to get the filtered data
    const handleSearchByTopic = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/data/topic/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleSearchBySource = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/data/source/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleSearchBySector = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/data/sector/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleSearchByRegion = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/data/region/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleSearchByPestle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/data/pestle/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }
    const handleSearchByCountry = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/data/country/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='tabsClass'>
            <Tabs
                defaultActiveKey="data"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="data" title="Data">
                    <form className="form-inline" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..." aria-label="Search" onChange={(e) => setSearch(e.target.value)} style={{ marginRight: '1rem' }} />
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchByTopic} style={{ margin: '1px' }}>Topic</button>
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchBySector} style={{ margin: '1px' }}>Sector</button>
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchByRegion} style={{ margin: '1px' }}>Region</button>
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchByPestle} style={{ margin: '1px' }}>Pestle</button>
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchBySource} style={{ margin: '1px' }}>Source</button>
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchByCountry} style={{ margin: '1px' }}>Country</button>
                    </form>
                    <Filters setMainData={setMainData} />

                    {limitedData && limitedData.length === 0 ? (
                        <div style={{ margin: '1rem' }}>No data found, or please wait for a while.</div>
                    ) : limitedData && limitedData.length > 0 ? (
                        <CardGroup>
                            {limitedData.map((e, i) => {
                                return <CardsForData item={e} index={i} key={i} />
                            })}
                        </CardGroup>
                    ) : (
                        <div>Loading...</div>
                    )}
                    <Button variant="primary" onClick={() => setLimit(prev => prev + 3)}>Show More</Button>
                </Tab>

                <Tab eventKey="chart" title="Interactive Insights/Dashboard">
                    <form className="form-inline" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..."
                            aria-label="Search" onChange={(e) => setSearch(e.target.value)} style={{ marginRight: '1rem' }} />
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchByTopic} style={{ margin: '1px' }}>Topic</button>
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchBySector} style={{ margin: '1px' }}>Sector</button>
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchByRegion} style={{ margin: '1px' }}>Region</button>
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchByPestle} style={{ margin: '1px' }}>Pestle</button>
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchBySource} style={{ margin: '1px' }}>Source</button>
                        <button className="btn btn-primary my-2 my-sm-0" type="button" onClick={handleSearchByCountry} style={{ margin: '1px' }}>Country</button>
                    </form>
                    <Filters setMainData={setMainData} />
                    <AccordionForCharts data={data} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Tabsrow