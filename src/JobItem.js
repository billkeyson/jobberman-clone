import React,{useEffect,useState} from 'react'
import './JobItem.css'
function JobItem({location}) {
    const [ajobItem, setJobItem] = useState({})
    useEffect(() => {
       if(location)
       setJobItem(location.state)
    }, [])
    console.log(location)
    return (
        <div className="jobitems"> 
            {/* {location} */}
            {/* Job Summary */}
            <div className="job_summary">
                <h4>Job Summary</h4>

                <ul>
                    <li><b>Minimum Qualification:</b> {ajobItem?.qualification}</li>
                    <li><b>Experience Level:</b> {ajobItem?.experience}</li>
                </ul>

            </div>
            <div className="Job_description">
                <h4>Job Description</h4>
                <h5>Duties and Responsibilities</h5>
                <p>
               {ajobItem?.description}
                </p>

                {/* Posted :{console.log(JSON.parse(ajobItem?.timestamp).seconds)} */}
            </div>
        </div>
    )
}

export default JobItem
