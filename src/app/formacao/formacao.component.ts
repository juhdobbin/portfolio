import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-formacao',
    templateUrl: './formacao.component.html',
    styleUrls: ['./formacao.component.scss'],
})
export class FormacaoComponent implements OnInit {
    public formacoes = [
        {
            data: '2015',
            titulo: 'Instituto Brasileiro de Tecnologia Avançada - IBTA',
            subtitulo: ' Tecnológo em Sistemas para Internet',
        },
        {
            data: '2011',
            titulo: 'Centro Paula Souza - ETEC Raposo Tavares',
            subtitulo: ' Técnico em Sistemas para Internet',
        },
        {
            data: '2009',
            titulo: 'Centro Paula Souza',
            subtitulo: 'Técnico em Gestão de Pequenas Empresas',
        }
    ];
    constructor() {}

    ngOnInit(): void {}
}
