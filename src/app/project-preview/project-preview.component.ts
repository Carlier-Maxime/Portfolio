import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css'],
  animations: [
    trigger('flyInOut',[
      state('in',style({backgroundColor: 'blue'})),
      state('out',style({backgroundColor: 'red'})),
      transition('void => *', [
        style({backgroundColor: 'yellow', opacity: 50}),
        animate(2000)
      ])
    ])
  ]
})

export class ProjectPreviewComponent implements OnInit {
  @Input() name : string = '';
  @Input() description : string = '';
  @Input() link : string = '';
  @Input() img : string = '';
  @Input() competences : string[] = [];

  @ViewChild('info') info: ElementRef | undefined;
  @ViewChild('infoimg') infoimg: ElementRef | undefined;

  isHover: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    console.log('toggle');
    this.isHover = !this.isHover;
  }

  ngAfterViewInit(){
    if (this.info!=undefined && this.infoimg != undefined){
      this.infoimg.nativeElement.onmouseenter = this.toggle;
      this.info.nativeElement.onmouseleave = this.toggle;
    }
  }

}
