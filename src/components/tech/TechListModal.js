import React, { useState, useEffect } from 'react'
import PreLoader from '../layout/PreLoader';
import TechItem from './TechItem';

const TechListModal = ()=> {
    //setting our useEffect
    const [techs, setTechs] = useState([]);
    //setting loading when data is been fetched
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs()
        //eslint-disable-next-line
    }, [])

    const getTechs = async()=>{
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();

        setTechs(data);
        setLoading(false);
    }
    if(loading){
        return <div><PreLoader/>  {console.log("loading...")}</div>
    }
   
        return (
            <div id="tech-list-modal" className="modal">
                <div className="modal-content">
                    <h4>Technician List</h4>
                    <ul className="collection">
                        {!loading && techs.map(tech =>
                            <TechItem tech={tech} key={tech.id}/>
                        )}

                    </ul>
                </div>
                
            </div>
        )
    }
export default TechListModal
