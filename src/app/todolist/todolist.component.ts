import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @Output() ListCreated=new EventEmitter<{list:string,checked:boolean}>();
  TodoList='';
  Checked=false;

  constructor() { }

  ngOnInit(): void {
  }

  Adding(){
    this.ListCreated.emit({
      list:this.TodoList,
      checked:this.Checked,
    })
  }
}
