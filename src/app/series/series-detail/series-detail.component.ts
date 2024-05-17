import { Component, OnInit, Input } from '@angular/core';
import { Series } from '../series';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent{

  @Input() series!: Series;


}
