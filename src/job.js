import React from 'react';
import {withRouter} from 'react-router-dom'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import StarHalfOutlinedIcon from '@material-ui/icons/StarHalfOutlined';
import './job.css'
function job({id,name,company,duration,local,category,history,data}) {
    const selectJob = (id)=>{
        console.log(id)
        // console.log(history)
       history.push(`/${id}`,data)
    }
    return (
<div className="job" onClick={()=>{
    selectJob(id)
}}>
    <div>
    <WorkOutlineOutlinedIcon fontSize="large"/>

    </div>
    <div className="job_inf">
        <h3>{name}</h3>
        <p>
        {company} <br />
        {local}  | {duration} <br />
        {category}
        </p>
    </div>     
<div>
<StarHalfOutlinedIcon />

</div>

</div>
    )
}

export default withRouter(job)
