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

  getLink(competence : string) : string {
    switch (competence){
      case "PHP" : return "https://www.php.net/";
      case "Java" : return "https://www.oracle.com/fr/java/";
      case "HTML" : return "https://html.spec.whatwg.org/multipage/";
      case "CSS" : return "https://www.w3.org/Style/CSS/";
      case "Angular" : return "https://angular.io/";
      case "Typescript" : return "https://www.typescriptlang.org/";
      case "Git" : return "https://git-scm.com/";
      case "Java Swing" : return "https://docs.oracle.com/javase/6/docs/technotes/guides/swing/";
      case "Laravel" : return "https://laravel.com/";
      case "SQL" : return "https://sql.sh/";
      case "Python" : return "https://www.python.org/";
      case "PyQt" : return "https://wiki.python.org/moin/PyQt";
      default: return "#";
    }
  }
}
