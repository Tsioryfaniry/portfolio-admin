import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
   items: any = [

     {content:'Hero', edit:'edit', delete:'delete' },
     {content:'Section experience', edit:'edit', delete:'delete' },
  ] 
}
