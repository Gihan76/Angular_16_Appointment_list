import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  // appointment: string = "Take dog for a walk";

  // appointment: Appointment = {
  //   id: 1,
  //   title: "Take dog for a walk",
  //   date: new Date('2025-04-23')
  // }

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = [];

  ngOnInit(): void {
    // console.log("got loaded")
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    // alert(this.newAppointmentTitle + " " + this.newAppointmentDate);
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppoint: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle, 
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppoint);

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments));

      // alert(this.appointments.length);
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }

}
