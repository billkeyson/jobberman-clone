import React,{useEffect,useState} from 'react'
import './JobsFeed.css'
import Job from './job';
// import useStateValue from './StateProvider';
import db from './firebase';

function JobsFeed() {
    const [jobsresults,setJobs] =useState([])
    // const [{job},dispatch] = useStateValue()

    useEffect(() => {
         function fetchJobs(){
             db.collection('jobs').orderBy("timestamp","desc")
             .onSnapshot(snapshot=>{
                 setJobs(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))

             })
        }
        fetchJobs()

        
    }, [])
    console.log(jobsresults)

    return (
        <div className="jobsfeed">
            {
                jobsresults.map(ajob=>(
                <Job
                data = {ajob.data}
                id = {ajob.id}
                name={ajob.data.name}
                key={ajob.id}
                duration = {ajob.data.duration}
                local={ajob.data.location}
                category={ajob.data.category}
                company = {ajob.data.company}
                />
                ))
            }                      
        </div>
    )
}

export default JobsFeed
