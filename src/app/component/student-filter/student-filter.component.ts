import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.css']
})
export class StudentFilterComponent implements OnInit {
  studentList:any=
    [
      {
        id:1,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:2,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:3,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:4,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:5,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:6,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:7,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:8,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:9,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:10,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:11,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:12,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:13,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:14,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:15,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:16,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      },
      {
        id:17,
        name:"Nilesh Dhaneshwar",
        email:"niludhaneshwar@gmail.com",
        mobile:"8796213205",
        class:"10th",
        percentage:87,
        place:"shrirampur"
      }          

    ];
   
  

  constructor() { }

  ngOnInit() {
  }

  studentData(id:number){
    alert(id);
  }

}

export interface student{
  id:number,
  name:string,
  email:string,
  mobile:string,
  class:string,
  percentage:number,
  place:string
}
