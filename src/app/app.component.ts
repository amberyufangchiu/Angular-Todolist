import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ListElement=[{list:'',checked:false}];

  onServerAdd(serverData:{list:string,checked:boolean}){
    this.ListElement.push({
      list:serverData.list,
      checked:false
    })
  }

  deleteBtn($event:any){
    const RemoveItem=$event.target.parentElement;
    RemoveItem.remove();
  }
}
