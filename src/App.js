import React,{useEffect} from "react";
import "./App.css";
import Header from "./Header";
import InfoHeader from "./InfoHeader";
import JobsFeed from "./jobsFeed";
import Footer from "./Footer";
import { Route,Switch ,Redirect } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import JobItem from "./JobItem";
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';

function App() {
  const [{user},dispatch] = useStateValue()
  let userProfile = JSON.parse(localStorage.getItem("userProfile"))
  useEffect(() => {
    console.log("serrr " ,userProfile)
  
  }, [])
  return (
    <div className="app">
      <Switch>
      <Route
        path="/"
        exact
        render={() => {

          return (
            <>
              <Header />
              <InfoHeader />
              <JobsFeed />
              <Footer />
            </>
          );
        }}
      />
      <Route path="/dashboard" exact render={()=>{
        console.log("Hmmmmm ",userProfile)
       return  userProfile || user? <Dashboard /> :<Redirect to="/" />
      }} />

      <Route path="/:id" exact render={(location)=>{
        return (
          <>
          <Header />
              <InfoHeader />
              <JobItem {...location} />
            <Footer />
            </>
        );
      }} />

</Switch>
    </div>
  );
}

export default App;
