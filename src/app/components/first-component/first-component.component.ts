import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name = 'Enio';
  age: number = 30;
  job = 'Programador';
  hobbies = ["correr", "andar de bicicleta", "sair"];
  car = {
    name: 'Polo',
    year: 2019,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
