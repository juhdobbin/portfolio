import { Component, OnInit, Input } from '@angular/core';
import { TimelineItens } from './timeline.interface';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
    @Input() lista: Array<TimelineItens>;
    constructor() {}

    ngOnInit(): void {}
}
