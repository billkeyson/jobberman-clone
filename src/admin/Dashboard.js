import React from 'react'
import SideNav from './SideNav'
import DashboardBody from './DashboardBody'
import './Dashboard.css';
import Header from './Header'
function Dashboard() {
    return (
        <div className="main__dashboard">
            <Header />
             <div className="dashboard">
             <SideNav />
            
            <div className="container">
            <DashboardBody />
            </div>

            </div>
            
            
        </div>
    )
}

export default Dashboard
