import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seewhat-ilearned',
  templateUrl: './seewhat-ilearned.component.html',
  styleUrls: ['./seewhat-ilearned.component.scss']
})
export class SeewhatIlearnedComponent implements OnInit {

  passwordToggle: boolean = true;

  btnClickArray: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.passwordToggle = !this.passwordToggle;
    this.btnClickArray = [...this.btnClickArray, Date.now().toString()]
  }

}
