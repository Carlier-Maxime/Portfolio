import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  languages:string[] = ['Java','C++','Python','PHP','HTML','CSS','Typescript','SQL','Bash']
  logiciels:string[] = ['Intellij IDEA','PhpStorm','PyCharm','WebStorm','Visual studio code','Visual studio','Notepad++','Unreal Engine','Git']
  frameworks:string[] = ['Laravel','Angular','Qt','Pyqt','Java Swing','Bootstrap','Tensorflow','Keras']
  se:string[] = ['Linux','Fedora','Windows 10','Windows 7']

  constructor() { }

  ngOnInit(): void {
  }

}
