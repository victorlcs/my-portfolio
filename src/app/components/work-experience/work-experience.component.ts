
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { firstChart, secondChart, thirdChart } from 'src/app/data/data';
import { ChartModel } from 'src/app/models/chart-model';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  animations: [
    trigger('expandRight', [
      state('normal', style({
        transform: 'translateX(100px)'
      })),
      state('expanded', style({
        transform: 'translateX(0)'
      })),
      transition('normal <=> expanded', animate(200))
    ]),
    trigger('expandLeft', [
      state('normal', style({
        transform: 'translateX(-100px)'
      })),
      state('expanded', style({
        transform: 'translateX(0)'
      })),
      transition('normal <=> expanded', animate(200))
    ]),
    trigger('showRight', [
      state('hide', style({
        transform: 'translateX(100px)',
        opacity: '0'
      })),
      state('show', style({
        transform: 'translateX(0)'
      })),
      transition('hide <=> show', animate(200))
    ]),
    trigger('showLeft', [
      state('hide', style({
        transform: 'translateX(-100px)',
        opacity: '0'
      })),
      state('show', style({
        transform: 'translateX(0)'
      })),
      transition('hide <=> show', animate(200))
    ])
  ]
})
export class WorkExperienceComponent implements OnInit, AfterViewInit  {
  isMobile: boolean;
  workItemStates = ['normal', 'normal', 'normal'];
  workDescStates = ['hide', 'hide', 'hide'];

  // NGX-Chart
  firstChart: ChartModel[] = firstChart;
  secondChart: ChartModel[] = secondChart;
  thirdChart: ChartModel[] = thirdChart;

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Skill';
  showYAxisLabel = true;
  yAxisLabel = 'Rate';
  maxRate = 10;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', 'purple', 'darkblue', 'white']
  };

  //Pie Chart
  // options
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      }else {
        this.isMobile = false;
      }
    });
   }

  onSelect(event) {
    console.log(event);
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  expand(index: number) {
    this.workItemStates[index] === 'normal' ? this.workItemStates[index] = 'expanded' : this.workItemStates[index] = 'normal';
    this.workDescStates[index] === 'hide' ? this.workDescStates[index] = 'show' : this.workDescStates[index] = 'hide';
  }

}
