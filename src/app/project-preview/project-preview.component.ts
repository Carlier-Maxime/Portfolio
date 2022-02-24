import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {
  @Input() name : string = '';
  @Input() description : string = '';
  @Input() link : string = '';
  @Input() img : string = '';
  @Input() competences : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
