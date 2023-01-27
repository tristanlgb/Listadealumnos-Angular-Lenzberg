import { Component } from '@angular/core';
import {Student} from './student';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  studentList:Student[] = new Array<Student>();
  SortedStudentList:Student[] = new Array<Student>();
  currentFilter:number=null;

    constructor(){

      for(let i=0;i<this.studentsData.length;i++){
          this.studentList[i] = new Student();
          Object.assign(this.studentList[i],this.studentsData[i]);
      }
      this.SortedStudentList = this.studentList;
    }

estudiantesId1a6=(x:Student)=>{return (x.id > 0 && x.id<=6);};

estudiantesEdadMayorA30=(x:Student)=>{return (x.age>30);};

telefonoFinalizadoEn4 =(x:Student)=>{return (x.phone.charAt(x.phone.length-1)=="4");};

nombreComienzaConB=(x:Student)=>{return (x.name.charAt(0)=="b" || x.name.charAt(0)=="B");};


SortStudents(filteringFunction,filterChosen:HTMLSelectElement){

  this.currentFilter=parseInt(filterChosen.options[filterChosen.options.selectedIndex].dataset.sort);

  switch(this.currentFilter){
      case 1:{filteringFunction = ()=>{return true};break;}
      case 2:{filteringFunction= this.estudiantesId1a6;break;}
      case 3:{filteringFunction= this.estudiantesEdadMayorA30;break;}
           case 4:{filteringFunction= this.telefonoFinalizadoEn4;break;}
      case 5:{filteringFunction= this.nombreComienzaConB;break;}
  }

  
  this.SortedStudentList=this.studentList;
  
  this.SortedStudentList=this.SortedStudentList.filter(filteringFunction);
}


   studentsData= [
      {
        "id": 0,
        "name": "Gerardo perez",
        "age": 27,
        "email": "gerardoperezmail",
        "phone": "1234561",
        "address": "abc 123",
        
      },
      {
        "id": 1,
        "name": "denis gonzalez",
        "age": 38,
        "email": "denisgonzalezmail",
        "phone": "1234566",
        "address": "abc 123",
        
      },
      {
        "id": 2,
        "name": "Willy lemos",
        "age": 32,
        "email": "willylemosmail",
        "phone": "1234562",
        "address": "abc 123",
        
      },
      {
        "id": 3,
        "name": "Hernan peres",
        "age": 33,
        "email": "hernanperesmail",
        "phone": "12345622",
        "address": "abc123",
        
      },
      {
        "id": 4,
        "name": "Lilita carrio",
        "age": 22,
        "email": "lilitamil",
        "phone": "1234568",
        "address": "abc 123",
        
      },
      {
        "id": 5,
        "name": "Carlos mendes",
        "age": 26,
        "email": "carlosmendesmail",
        "phone": "1234563",
        "address": "abc123",
        
      },
      {
        "id": 6,
        "name": "Ethel Patrick",
        "age": 26,
        "email": "ethelpatrick@moreganic.com",
        "phone": "+1 (924) 466-3077",
        "address": "794 Banker Street, Brandermill, Texas, 9029",
        "avg_grade": 100
      },
      {
        "id": 7,
        "name": "Benjamin peres",
        "age": 23,
        "email": "benjaminmail",
        "phone": "1234564",
        "address": "abc123",
        
      },
      {
        "id": 8,
        "name": "agustin bernardi",
        "age": 36,
        "email": "mailbernardi",
        "phone": "1234563",
        "address": "abc123",
        
      },
      {
        "id": 9,
        "name": "franco Cardoso",
        "age": 33,
        "email": "francomail",
        "phone": "12345677",
        "address": "abc123",
        
      },
      {
        "id": 10,
        "name": "candela mayra",
        "age": 20,
        "email": "candelamayra123",
        "phone": "1234561",
        "address": "abc123",
        
      },
      {
        "id": 11,
        "name": "barto berez",
        "age": 25,
        "email": "bartomail",
        "phone": "1234561",
        "address": "abc 123",
        
      },
      {
        "id": 12,
        "name": "beronica Basca",
        "age": 33,
        "email": "beromail",
        "phone": "1234560",
        "address": "abc123",
        
      },
      {
        "id": 13,
        "name": "helena polonski",
        "age": 26,
        "email": "helenamil",
        "phone": "1234561",
        "address": "abc123",
        
      },
      {
        "id": 14,
        "name": "gabriela watakis",
        "age": 23,
        "email": "watakismail",
        "phone": "1234564",
        "address": "abc123 ",
        
      }
    ]
}
