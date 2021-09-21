import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions';
// import PreLoader from '../layout/PreLoader';
import TechItem from './TechItem';

const TechListModal = ({getTechs, tech: { techs, loading }})=> {
    //setting our useEffect
    // const [techs, setTechs] = useState([]);
    //setting loading when data is been fetched
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs()
        //eslint-disable-next-line
    }, [])

    // const getTechs = async()=>{
    //     setLoading(true);
    //     const res = await fetch('/techs');
    //     const data = await res.json();

    //     setTechs(data);
    //     setLoading(false);
    // }
    // if(loading){
    //     return <div><PreLoader/>  {console.log("loading...")}</div>
    // }
   
        return (
            <div id="tech-list-modal" className="modal">
                <div className="modal-content">
                    <h4>Technician List</h4>
                    <ul className="collection">
                        {techs !== null && !loading && techs.map(tech =>
                            <TechItem tech={tech} key={tech.id}/>
                        )}

                    </ul>
                </div>
                
            </div>
        )
    }

    TechListModal.propTypes ={
        tech: PropTypes.object.isRequired,
        getTechs: PropTypes.func.isRequired

    }
    const mapStateToProps = state => ({
        tech: state.tech
    })
export default connect(mapStateToProps,{getTechs})(TechListModal)
