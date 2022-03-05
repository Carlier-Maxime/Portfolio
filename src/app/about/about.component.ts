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
  arrayLength:number[]=[]

  constructor() { }

  ngOnInit(): void {
    this.setArrayIndex();
  }

  setArrayIndex() {
    let max:number = Math.max(this.languages.length,this.logiciels.length,this.frameworks.length,this.se.length);
    this.arrayLength = Array(max).fill(0).map((x,i)=>i);
  }

  getLanguage(i:number) : string {
    if (i>=this.languages.length) return ".";
    return this.languages[i];
  }

  getLogiciel(i:number) : string {
    if (i>=this.logiciels.length) return ".";
    return this.logiciels[i];
  }

  getFramework(i:number) : string {
    if (i>=this.frameworks.length) return ".";
    return this.frameworks[i];
  }

  getSE(i:number) : string {
    if (i>=this.se.length) return ".";
    return this.se[i];
  }
}
