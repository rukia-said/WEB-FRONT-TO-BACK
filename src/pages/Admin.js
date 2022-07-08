import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import doctorimg from '../assets/ani-kolleshi-7jjnJ-QA9fY-unsplash.jpg';
import { Form, Button, row, Col } from 'react-bootstrap';
import '../admin.css';

const Admin = () => {
  return (
    <>

      <div className='home' style={{ backgroundImage: `url(${doctorimg})` }}>
        <div class="row">
          <div class="col-lg-3 col-6">

            <div class="small-box bg-info">
              <div class="inner">
                {/* <p>fetch data from database</p> */}
                <h3>150</h3>

                <p>Total Drugs</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div class="col-lg-3 col-6">

            <div class="small-box bg-danger">
              <div class="inner">
                <h3>150</h3>

                <p>Total Patients</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <div class="col-lg-3 col-6">

            <div class="small-box bg-primary">
              <div class="inner">
                <h3>150</h3>

                <p>Admins</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>


        </div>



        {/* <div class="col-lg-3 col-6">

          <div class="small-box bg-info">
            <div class="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div> */}



      </div>






    </>


  )
}

export default Admin;