import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css'],
  animations: [
    trigger('flyInOut',[
      state('in',style({transform: 'translateX(0%)'})),
      state('out',style({transform: 'translateX(-100%)'})),
      transition('out => in', [animate('0.35s 0ms ease-out'), style({transform: 'translateX(-50%)'})]),
      transition('in => out', [animate('0.1s 100ms ease-in'), style({transform: 'translateX(-50%)'})])
    ])
  ]
})

export class ProjectPreviewComponent implements OnInit {
  @Input() name : string = '';
  @Input() description : string = '';
  @Input() link : string = '';
  @Input() img : string = '';
  @Input() competences : string[] = [];

  isHover: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isHover = !this.isHover;
  }
}
