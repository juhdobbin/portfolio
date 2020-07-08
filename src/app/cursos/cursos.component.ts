import { Component, OnInit } from '@angular/core';
import { TimelineItens } from '../timeline/timeline.interface';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
    public cursos: Array<TimelineItens> = [
        {
            titulo: 'Python 3 - Introdução',
            subtitulo: 'Alura',
            link: {
                titulo: '+ visualizar certificado',
                url:
                    'http://www.nos2web.com/certificados/python-3-introducao-a-nova-versao-da-linguagem.pdf',
            },
        },
        {
            titulo: 'Angular (Lapidando o projeto)',
            subtitulo: 'Alura',
            link: {
                titulo: '+ visualizar certificado',
                url:
                    'http://www.nos2web.com/certificados/angular-lapidando-projeto.pdf',
            },
        },
        {
            titulo: 'Angular (Upload, build e novos componentes)',
            subtitulo: 'Alura',
            link: {
                titulo: '+ visualizar certificado',
                url:
                    'http://www.nos2web.com/certificados/angular-upload-build.pdf',
            },
        },
        {
            titulo: 'Angular (Autenticação, forms e lazy loading)',
            subtitulo: 'Alura',
            link: {
                titulo: '+ visualizar certificado',
                url:
                    'http://www.nos2web.com/certificados/angular-autenticacao.pdf',
            },
        },
        {
            titulo: 'Angular - Introdução',
            subtitulo: 'Alura',
        },
        {
            titulo: 'Jasmine, teste automatizados com javascript',
            subtitulo: 'Alura',
        },
        {
            titulo: 'AngularJS',
            subtitulo: 'Alura',
            link: {
                titulo: '+ visualizar certificado',
                url: 'http://www.nos2web.com/certificados/angular1.pdf',
            },
        },
        {
            titulo: 'Sass e Compass',
            subtitulo: 'Alura',
            link: {
                titulo: '+ visualizar certificado',
                url: 'http://www.nos2web.com/certificados/sass-compass.pdf',
            },
        },
        {
            titulo: 'Gulp - Automação de tarefas no front end',
            subtitulo: 'Alura',
            link: {
                titulo: '+ visualizar certificado',
                url: 'http://www.nos2web.com/certificados/gulp.pdf',
            },
        },
        {
            titulo: 'Entendendo e documentando APIs REST / RESTful',
            subtitulo: 'Udemy',
            link: {
                titulo: '+ visualizar certificado',
                url: 'http://www.nos2web.com/certificados/rest-restfull.pdf',
            },
        },
    ];
    constructor() {}

    ngOnInit(): void {}
}
