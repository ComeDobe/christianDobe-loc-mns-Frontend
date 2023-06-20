import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {
  private location: any;

  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
