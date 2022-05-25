import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 40;
  color = 'blue';
  font = 'Arial';
  padding = '20px';

  classes = ["green-title", "small-title"];

  underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
