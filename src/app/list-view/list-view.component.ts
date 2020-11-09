import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  btnIsOff = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.btnIsOff = true},3000)
  }

}
