import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'resume';
    @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

    // constructor(private windowService: WindowService){

    // }
    ngOnInit(): void {
        console.log(window.innerWidth);
        window.innerWidth > 800 ? this.sidenav.open() : this.sidenav.close();
    }
    scroll(el: HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
