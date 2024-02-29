import './App.css';
import { BrowserRouter as BRouter, Switch, Route,Link } from "react-router-dom";
import {Button} from "react-bootstrap";

//IT20207236 - Dhanuka
import Header from './components/Header';
import AdminHeader from './components/AdminHeader';
import AddVehicle from './components/AddVehicle';
import AllVehicle from './components/AllVehicle';
import VehicleDetails from './components/VehicleDetails';
import Home from './components/Home';
import Footer from './components/Footer';
import HireBus from './components/HireBus';
import AllHires from './components/AllHires';
import EditVehicleDetails from './components/EditVehicleDetails';
import VHome from './components/VehicleHome';
import DeleteVehicle from './components/DeleteVehicle';
import ProtectedRouter from './components/ProtectedRoutes';
import { useState } from 'react';

//it20190798
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profile from './components/Profile';
import AllPassengers from './components/AllPassengers';
import UserHandler from './components/UserHandler';
import UserLevel from './components/UserLevel';
import EditUserLevel from './components/EditUserLevel';
import Adminlog from './components/Adminlog';
import PassengerReport from './components/PassengerReport';
import UserHandlerReport from './components/UserHandlerReport';


//IT20205256
import AddPayment from './components/AddPayment';
import AllPayment from './components/AllPayments';
import Aboutus from './components/AboutUs';
import Successpage from './components/Success';

//IT20197032
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import AddSalaryDetails from './components/AddSalaryDetails';
import FetchEmployee from './components/FetchEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import SalaryDetailsList from './components/SalaryDetailsList';
import EmployeeManagementHome from './components/EmployeeManagementHome';
import AdminPanel from './components/AdminPanel';
import FetchSalaryRecord from './components/FetchSalaryRecord';
import EmployeereportRender from './components/EmployeereportRender';


//IT20192532
import Adminallbookings from './components/Adminallbookings';
import AddBooking from './components/AddBooking';
import EditBooking from './components/EditBooking';
import BookingDetails from './components/BookingDetails';
import ReservationManagement from './components/ReservationManagement';
import Seat from './components/Seat';
import Requesteditdetails from './components/Requesteditdetails';
import Allrequest from './components/Allrequest'
import Allbooking from './components/Adminallbookings';

//IT20201982
import ViewTimetable from './components/Viewtimetable';
import AddTimetable from './components/Timetable';
import Table from './components/Table';

//IT20201296
import CreateDriver from "./components/CreateDriver";
import DriverDetails from "./components/DriverDetails";
import EditDriver from "./components/EditDriver";
import Homedriver from "./components/Homedriver";
import searchfordrivers from './components/SearchforDrivers';
import Contactusadmin from './components/Contactusadmin';

//It20198954
import AddFeedback from "./components/PAddFeedback";
import EAddFeedback from "./components/EAddFeedback";
import AllFeedbacks from './components/PAllFeedbacks';
import EAllFeedbacks from './components/EAllFeedback';
import AdminAllFeedbacks from './components/AdminViewPassengerFeedbacks';
import AdminAllEmpFeedbacks from './components/AdminViewDriverFeedbacks';
import FeedbackHandler from './components/FeedbackAdminHome';
import AllEmployeeFeedback from './components/EditEmpFee';
import AllPassengerFeedback from './components/EditPassengerFeedback';


const App =()=> {

  const [isAuthUser, setIsAuthUser] = useState(false);
  const [isAuthAdmin, setIsAuthAdmin] = useState(false);
  return (
  
       <BRouter>
          <main className="page-body-content">
    

    {/* IT20207236 - Dhanuka */}

    {/*  User */}

              <Route  path="/home" component={Header} />
              <Route exact path="/home" component={Home} />

              <Route  path="/hirebus" component={Header} />
              <Route exact path="/hirebus" component={HireBus} />
             

     {/* Admin */}
              <Route  path="/addvehicle" component={AdminHeader} />
              <Route  path="/addvehicle" component={AddVehicle} />
             

              <Route  path="/allvehicle" component={AdminHeader} />
              <Route exact path="/allvehicle" component={AllVehicle} />
         
              <Route  path="/allhires" component={AdminHeader} />
              <Route exact path="/allhires" component={AllHires} />
      
              <Route  path="/editvdetails/:id" component={AdminHeader} />
              <Route exact path="/editvdetails/:id" component={EditVehicleDetails} />
           
              <Route  path="/vehicledetails/:id" component={AdminHeader} />
              <Route exact path="/vehicledetails/:id" component={VehicleDetails} />
         
              <Route  path="/vhome" component={AdminHeader} />
              <Route exact path="/vhome" component={VHome} />
      
              <Route  path="/vehicledelete/:id" component={AdminHeader} />
              <Route exact path="/vehicledelete/:id" component={DeleteVehicle} />


      <Route path="/adminlog" exact>
      
      <Link to="/adminPanel"> <Button className="signinadmin" onClick={()=>{setIsAuthAdmin(true);}}>LogIn</Button></Link> 
      {/* <button onClick={()=>{setIsAuthAdmin(false);}}>LogOut</button>
       */}
     </Route>
      
      <Route/>
      
        
        <ProtectedRouter path="/adminPanel"  component= {AdminPanel} isAuth= {isAuthAdmin} />
          


        
            
{/* IT20190798 */}

              <Route exact path="/" component={Signin} />
    
              <Route exact path="/signup" component={Signup} />

              <Route exact path="/profile/:email" component={Profile} />

              <Route  path="/AllPassengers" component={AdminHeader} />
              <Route exact path="/AllPassengers" component={AllPassengers} />

              <Route  path="/userhandler" component={AdminHeader} />
              <Route exact path="/userhandler" component={UserHandler} />


              <Route  path="/userlevel" component={AdminHeader} />
              <Route exact path="/userlevel" component={UserLevel} />
         
              <Route  path="/edituserlevel/:id" component={AdminHeader} />
              <Route exact path="/edituserlevel/:id" component={EditUserLevel} />
             

             <Route exact path="/adminlog" component={Adminlog} />


              <Route exact path="/userhandlerreport" component={AdminHeader} />
              <Route exact path="/userhandlerreport" component={UserHandlerReport} />
              


       {/* Kishan's */}

            <Route exact path="/about" component={Header} />
            <Route exact path="/about" component={Aboutus} />
          
          
           <Route exact path="/addpayment" component={Header} />
            <Route exact path="/addpayment" component={AddPayment} />


            <Route exact path="/allpayment" component={AdminHeader} />
            <Route exact path="/allpayment" component={AllPayment} />

            <Route exact path="/success" component={Header} />
            <Route exact path="/success" component={Successpage} />

           

         {/* Sayuri */}

            <div className="bodyEmp"> 
              
         <Route path="/employeeManagementHome" component = {AdminHeader}/>
         <Route path="/employeeManagementHome" component = {EmployeeManagementHome}/>
             
         <Route path="/generateReportEmployee" component = {AdminHeader}/>
         <Route path="/generateReportEmployee" component = {EmployeereportRender}/>
              
         <Route path="/addemp" component = {AdminHeader}/>
         <Route exact path="/addemp" component={AddEmployee}/>

         <Route path="/updateemp/:id" component = {AdminHeader}/>
         <Route exact path="/updateemp/:id" component={UpdateEmployee}/>

         <Route path="/deleteemp/:id" component = {AdminHeader}/>
         <Route exact path="/deleteemp/:id" component={DeleteEmployee}/>

         <Route path="/entersal" component = {AdminHeader}/>
         <Route exact path="/entersal" component={AddSalaryDetails}/>

         <Route path="/getemp/:id" component = {AdminHeader}/>
         <Route exact path="/getemp/:id" component={FetchEmployee}/>

         <Route path="/allemployee" component = {AdminHeader}/>
         <Route exact path="/allemployee" component={EmployeeList}/>

         <Route path="/getallsal" component = {AdminHeader}/>
        <Route exact path="/getallsal" component={SalaryDetailsList}/>

        <Route path="/getallsal" component = {AdminHeader}/>
        <Route exact path="/fetchsal/:id" component={FetchSalaryRecord}/>



            </div>
         

{/*charya*/}

<div className = "card auth-card">

    <Route exact path="/requesteditdelete" component={Header} />
    <Route exact path="/requesteditdelete" component={Requesteditdetails} />

    <Route exact path="/seatsb" component={Header} />
    <Route exact path="/seatsb" component={Seat}/>

    
    <Route exact path="/all" component={Header} />
    <Route exact path="/all"  component={Allbooking}/> 

    <Route exact path="/addRes" component={Header} />
    <Route exact path="/addRes" component={AddBooking}/>

    <Route path="/editRes/:id" component = {AdminHeader}/>
    <Route exact path="/editRes/:id"  component={EditBooking}/>

    <Route path="/editRes/:id" component = {AdminHeader}/>
    <Route exact path="/editRes/:id" component={BookingDetails}/>

    <Route path="/adminall" component = {AdminHeader}/>
    <Route path="/adminall" component = {Adminallbookings}/>

    <Route path="/allrequest" component = {AdminHeader}/>
    <Route path="/allrequest" component = {Allrequest}/>

    <Route exact path="/reservationHome" component={AdminHeader} />
    <Route exact path="/reservationHome" component={ReservationManagement} />


  </div>

  {/* Uditha */}
  
  <Route path="/addtimetable" component = {AdminHeader}/>
  <Route exact path="/addtimetable" component={AddTimetable} />

  <Route path="/ViewTimetable" component = {Header}/>
  <Route exact path="/ViewTimetable" component={ViewTimetable} />

  <Route path="/table" component = {Header}/>
  <Route exact path="/table" component={Table} />




    {/*Dishma*/}
          
    <div className="centainer">
    <Route path="/driverhome" component = {AdminHeader}/>
    <Route path="/driverhome" exact component={Homedriver}></Route>

    <Route path="/adddriver" component = {AdminHeader}/>
     <Route path="/adddriver" component ={CreateDriver}></Route>

     <Route path="/editdriver/:id" component = {AdminHeader}/>    
     <Route path="/editdriver/:id" component={EditDriver}></Route>

     <Route path="/driverdetails/:id" component = {AdminHeader}/>    
    <Route path="/driverdetails/:id" component={DriverDetails}></Route>

    <Route path="//searchfordrivers" component = {Header}/> 
    <Route path="/searchfordrivers" component={searchfordrivers}></Route>

    <Route path="//searchfordrivers" component = {Header}/> 
    <Route path="/contactusadmin" component={Contactusadmin}></Route>
         </div>
  

            {/* Thisara */}
            
          

            <Route path="/addf" component = {Header}/>    
            <Route path="/addf" exact component={AddFeedback} />  

            <Route path="/readf" exact component={Header} /> 
            <Route path="/readf" exact component={AllFeedbacks} /> 
           

            <Route path="/addfe" exact component={AdminHeader} />
             <Route path="/addfe" exact component={EAddFeedback} />

             <Route path="/readfe" exact component={AdminHeader} />
            <Route path="/readfe" exact component={EAllFeedbacks} />

            <Route path="/readfadmin" exact component={AdminHeader} />
            <Route path="/readfadmin" exact component={AdminAllFeedbacks} />

            <Route path="/readfeadmin" exact component={AdminHeader} />
            <Route path="/readfeadmin" exact component={AdminAllEmpFeedbacks} />
          
            <Route exact path="/feedbackhandler" component={AdminHeader} />
            <Route exact path="/feedbackhandler" component={FeedbackHandler} />

            <Route exact path="/updatef" component={AdminHeader} />
            <Route exact path="/updatef" component={AllPassengerFeedback} />

            <Route exact path="/updatefe" component={AdminHeader} />
            <Route exact path="/updatefe" component={AllEmployeeFeedback} />


            <Footer/> 

          </main>
        </BRouter> 
      );
    };

    
   

export default App;
