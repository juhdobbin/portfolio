import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

    public experiencia: number;
    private comecoDeCarreira = 2010;

  constructor() { }

  ngOnInit(): void {
    this.experiencia = new Date().getFullYear() - this.comecoDeCarreira;
  }

}
