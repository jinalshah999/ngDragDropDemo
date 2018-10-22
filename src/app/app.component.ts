import { Component, OnInit } from '@angular/core';
import { CdkDragDrop,moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todo=[
    'write an email to your manager',
    'push your code to github',
    'go for running',
    'go to movie',
    'buy milk',
    'brush your teeth',
    'check your email'
  ];
  doneList=['done'];
  constructor(){
  }

  ngOnInit(){
 }
 drop(event:CdkDragDrop<string[]>){
  if(event.previousContainer===event.container){
    moveItemInArray(this.todo,event.previousIndex,event.currentIndex);
  }
  else{
    transferArrayItem(event.previousContainer.data,
      event.container.data,event.previousIndex,event.currentIndex);
  }


 }

}
