import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-form',
  templateUrl: './small-form.component.html',
  styleUrls: ['./small-form.component.scss']
})
export class SmallFormComponent implements OnInit {

  name1: string = 'name1';
  name2: string = 'name2';

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateInputName2(event: any ) {
    console.log('name2', HTMLInputElement)
    this.name2 = (event.target as HTMLInputElement).value;
  }

}
