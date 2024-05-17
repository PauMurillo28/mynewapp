import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  selected:boolean = false;
  series: Array<Series> = [];
  promedioSeries: number = 0;
  selectedSeries!: Series; 
  constructor(private seriesService: SeriesService) { }
  getSeries(): void {
    this.seriesService.getSeries().subscribe((info) => {
      this.series = info;
      this.promedio();
    });
  }

  promedio() {
    let sum = 0;
    for (let i = 0; i < this.series.length; i++) {
      sum += this.series[i].seasons;
    }
    this.promedioSeries= sum / this.series.length;
  }

  onSelected(series: Series): void {
    this.selectedSeries = series;
    this.selected = !this.selected;
  }


  ngOnInit(): void{
    this.getSeries();
    this.promedio();
  }

}
