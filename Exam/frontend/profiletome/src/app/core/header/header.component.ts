import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dropDownMenu = false;

  toggleDropDown(){
    this.dropDownMenu = !this.dropDownMenu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
