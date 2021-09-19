import React, { useState, useEffect } from 'react'
import LogItem from './LogItem';
const Logs = ()=> {
    //setting our useEffect
    const [logs, setLogs] = useState([]);
    //setting loading when data is been fetched
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs()
        //eslint-disable-next-line
    }, [])

    const getLogs = async()=>{
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }
    if(loading){
        return <h4>Loading...</h4>
    }
   
        return (
            <div>
                <ul className="collection with-header">
                    <li className="collection-header">
                        <h4 className="center">System Logs</h4>
                    </li>
                    {!loading && logs.length === 0 ? (<p className="center">No logs to show...</p>) :
                    (logs.map(log => <LogItem log={log} key={log.id}/>)) }
                </ul>
                
            </div>
        )
    }
export default Logs
