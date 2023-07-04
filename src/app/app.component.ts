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

//filtering functions//

Entre1y6anos=(x:Student)=>{return (x.id > 0 && x.id<=6);};

MayoresDe30=(x:Student)=>{return (x.age>30);};

GrapeFruite=(x:Student)=>{return true;};

MayoresDe90=(x:Student)=>{return (x.avg_grade>90);};

telefonoFinalizaEn4=(x:Student)=>{return (x.phone.charAt(x.phone.length-1)=="4");};

comienzaNombreConB=(x:Student)=>{return (x.name.charAt(0)=="b" || x.name.charAt(0)=="B");};

//sort student action when selecting diffrent option
SortStudents(filteringFunction,filterChosen:HTMLSelectElement){

  this.currentFilter=parseInt(filterChosen.options[filterChosen.options.selectedIndex].dataset.sort);

  switch(this.currentFilter){
      case 1:{filteringFunction = ()=>{return true};break;}
      case 2:{filteringFunction= this.Entre1y6anos;break;}
      case 3:{filteringFunction= this.MayoresDe30;break;}
      case 4:{filteringFunction= this.GrapeFruite;break;}
      case 5:{filteringFunction= this.MayoresDe90;break;}
      case 6:{filteringFunction= this.telefonoFinalizaEn4;break;}
      case 7:{filteringFunction= this.comienzaNombreConB;break;}
  }

  //reset the sorted array back to unsorted
  this.SortedStudentList=this.studentList;
  
  //sorting using the filter function
  this.SortedStudentList=this.SortedStudentList.filter(filteringFunction);
}

//JSON DATA///

   studentsData= [
      {
        "id": 0,
        "name": "gabriel perez",
        "age": 25,
        "email": "gabrielperez@yahoo.com",
        "phone": "123456",
        "address": "peru 156",
        "avg_grade": 70
      },
      {
        "id": 1,
        "name": "denis tabares",
        "age": 38,
        "email": "denis@hotmail.com",
        "phone": "123456",
        "address": "mexico 1985",
        "avg_grade": 90
      },
      {
        "id": 2,
        "name": "william perez",
        "age": 32,
        "email": "willy@hotmail.com",
        "phone": "12345612",
        "address": "argentina 7895",
        "avg_grade": 96
      },
      {
        "id": 3,
        "name": "hernan perez",
        "age": 33,
        "email": "hernan@perez.com",
        "phone": "1212345612",
        "address": "constitucion 415",
        "avg_grade": 91
      },
      {
        "id": 4,
        "name": "lilia gonzalez",
        "age": 22,
        "email": "lily@gonzalez.com",
        "phone": "12345678",
        "address": "republica 1234",
        "avg_grade": 93
      },
      {
        "id": 5,
        "name": "Campbell Calhoun",
        "age": 26,
        "email": "campbellcalhoun@moreganic.com",
        "phone": "+1 (875) 419-3783",
        "address": "578 Aitken Place, Valle, Oregon, 8222",
        "avg_grade": 89
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
        "name": "Benjamin House",
        "age": 23,
        "email": "benjaminhouse@moreganic.com",
        "phone": "+1 (837) 584-2164",
        "address": "372 Heath Place, Bladensburg, Colorado, 5430",
        "avg_grade": 71
      },
      {
        "id": 8,
        "name": "Acosta Bridges",
        "age": 36,
        "email": "acostabridges@moreganic.com",
        "phone": "+1 (891) 462-3863",
        "address": "357 Calder Place, Lacomb, Arkansas, 3942",
        "avg_grade": 90
      },
      {
        "id": 9,
        "name": "French Cote",
        "age": 33,
        "email": "frenchcote@moreganic.com",
        "phone": "+1 (954) 551-2675",
        "address": "906 Reed Street, Ernstville, Connecticut, 3935",
        "avg_grade": 74
      },
      {
        "id": 10,
        "name": "Cruz May",
        "age": 20,
        "email": "cruzmay@moreganic.com",
        "phone": "+1 (971) 493-3391",
        "address": "191 Court Street, Onton, Alaska, 1689",
        "avg_grade": 97
      },
      {
        "id": 11,
        "name": "Barton Bruce",
        "age": 25,
        "email": "bartonbruce@moreganic.com",
        "phone": "+1 (947) 452-2091",
        "address": "575 Dictum Court, Cresaptown, District Of Columbia, 3362",
        "avg_grade": 85
      },
      {
        "id": 12,
        "name": "Bernice Brady",
        "age": 33,
        "email": "bernicebrady@moreganic.com",
        "phone": "+1 (919) 513-2260",
        "address": "417 Chauncey Street, Babb, New Hampshire, 7991",
        "avg_grade": 77
      },
      {
        "id": 13,
        "name": "Hartman Pollard",
        "age": 26,
        "email": "hartmanpollard@moreganic.com",
        "phone": "+1 (851) 462-2401",
        "address": "126 Hill Street, Cetronia, Hawaii, 261",
        "avg_grade": 82
      },
      {
        "id": 14,
        "name": "Queen Watkins",
        "age": 23,
        "email": "queenwatkins@moreganic.com",
        "phone": "+1 (937) 548-3674",
        "address": "344 Vermont Court, Garberville, Delaware, 516",
        "avg_grade": 87
      }
    ]
}
