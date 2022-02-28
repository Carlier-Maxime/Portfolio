import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-competence-link',
  templateUrl: './competence-link.component.html',
  styleUrls: ['./competence-link.component.css']
})
export class CompetenceLinkComponent implements OnInit {
  @Input() competence:string = 'unknow';
  link:string;

  constructor() {
    this.link=this.getLink(this.competence);
  }

  ngOnInit(): void {
    this.link=this.getLink(this.competence);
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
