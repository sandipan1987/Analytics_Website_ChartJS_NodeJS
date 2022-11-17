import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-icon-count',
  templateUrl: './generic-icon-count.component.html',
  styleUrls: ['./generic-icon-count.component.css']
})
export class GenericIconCountComponent implements OnInit {

  constructor() { }
  @Input() count: String;
  @Input() image_path: String;

  ngOnInit() {
  }

  
}
