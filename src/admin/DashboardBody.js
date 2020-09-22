import React,{useState} from "react";
import TextField from "@material-ui/core/TextField";
import './DashboardBody.css'
import { makeStyles } from "@material-ui/core/styles";
import firebase from 'firebase';
import db from '../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function DashboardBody() {

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(inputValue)
    if(inputValue){
      db.collection("jobs").add(inputValue)
    }
    
  }

  const [inputValue,setInputState] = useState({
    name:"",
    description:"",
    location:"",
    qualification:"",
    experience:"",
    duration:"",
    category:"",
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })

  return (
    <div className="dashboardBody">
      <form onSubmit={handleSubmit}>
        <TextField
        onChange = {(e)=>{
          inputValue.name = e.target.value
          console.log(inputValue)
          setInputState(inputValue)
        }}
        defaultValue={inputValue.name}
          id="filled-full-name"
          label="Job Name"
          style={{ margin: 8 }}
          placeholder="Job Name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
        defaultValue={inputValue.description}
        onChange={(e)=>{
          inputValue.description = e.target.value
          setInputState(inputValue)
        }}
          id="filled-full-description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Description"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
        defaultValue={inputValue.location}
        onChange={(e)=>{
          inputValue.location = e.target.value
          setInputState(inputValue)
        }}
          id="filled-full-location"
          label="Location"
          style={{ margin: 8 }}
          placeholder="Location"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
         defaultValue={inputValue.qualification}
         onChange={(e)=>{
           inputValue.qualification = e.target.value
           setInputState(inputValue)
         }}
          id="filled-full-qualification"
          label="Qualification"
          style={{ margin: 8 }}
          placeholder="Qualification"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
         defaultValue={inputValue.experience}
         onChange={(e)=>{
           inputValue.experience = e.target.value
           setInputState(inputValue)
         }}
          id="filled-full-experience"
          label="Experience"
          style={{ margin: 8 }}
          placeholder="Experience"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
         defaultValue={inputValue.duration}
         onChange={(e)=>{
           inputValue.duration = e.target.value
           setInputState(inputValue)
         }}
          id="filled-full-duration"
          label="Duration eg. full time"
          style={{ margin: 8 }}
          placeholder="Duration eg. full time"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

<TextField
         defaultValue={inputValue.category}
         onChange={(e)=>{
           inputValue.category = e.target.value
           setInputState(inputValue)
         }}
          id="filled-full-category"
          label="Category"
          style={{ margin: 8 }}
          placeholder="Category"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />


<TextField
         defaultValue={inputValue.company}
         onChange={(e)=>{
           inputValue.company = e.target.value
           setInputState(inputValue)
         }}
          id="filled-full-comapany"
          label="Category"
          style={{ margin: 8 }}
          placeholder="Company Name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DashboardBody;
