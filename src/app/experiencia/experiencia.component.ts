import { Component, OnInit } from '@angular/core';
import { TimelineItens } from '../timeline/timeline.interface';

@Component({
    selector: 'app-experiencia',
    templateUrl: './experiencia.component.html',
    styleUrls: ['./experiencia.component.scss'],
})
export class ExperienciaComponent implements OnInit {
    public experiencias: Array<TimelineItens> = [
        {
            data: 'set 2019 - atual',
            titulo: 'Front-end Sênior | Especialista Angular',
            subtitulo: 'Grupo GFT',
            descricao:
                'Especialista front-end angular alocada no Itaú BBA. Responsável pelo start e arquitetura do front end nos projetos, criação de modulos e componentes reutilizáveis, atualmente atuando em um projeto de workflow 100% dinâmico, com suas telas e páginas criadas em tempo real baseadas em serviços REST.',
        },
        {
            data: 'out 2018 - ago 2019',
            titulo: 'Front-end Pleno | Angular',
            subtitulo: 'Sky.one Cloud Solutions',
            descricao:
                'Desenvolvimente de aplicações front-end voltadas para o gerencimento de cloud utilizando APIs REST. Realização de testes unitários nas aplicações com Jasmine. Deploy do front-end automatizado com Jenkins, utilizando Git e AWS (S3, CloudFront, Route53).Utilização do Scrum e Kamban como framework ágil',
        },
        {
            data: 'jan 2017 - set 2018',
            titulo: 'Front-end Pleno',
            subtitulo: 'Lello Condomínios',
            descricao: 'Desenvolvimento de aplicações voltadas para o gerenciamento de condomínios, utilizando Angular e Primefaces (framework java para front-end). Utilização do Scrum como framework ágil',
        },
        {
            data: 'jun 2014 - nov 2016',
            titulo: 'Front-end',
            subtitulo: 'Athos Informática',
            descricao:
                'Desenvolvimento front end de sites e sistemas do ramo imobiliário. Participação ativa em projetos. Desenvolvimento de Front end em aplicações WebApp( app iCondominio)',
        },
        {
            data: 'fev 2013 - jul 2014',
            titulo: 'Front-end',
            subtitulo: 'Ecommet / Becommerce',
            descricao:
                'Desenvolvimento front end de sites e softwares. Implementação e configuração de lojas virtuais nas plataformas SoluçôesNet, Loja Integrada, Vtex. Desenvolvimento de email marketing.',
        },
        {
            data: 'fev 2012 - fev 2013',
            titulo: 'Web Designer',
            subtitulo: 'Fragcenter Comercio e Serviços',
            descricao:
                'Criação de impressos, email marketing, malas-diretas, supervisão em feiras e eventos. Suporte na área de T.I. Criação e manutenção de sites. Acompanhamento de campanhas Adwords e Analytics.',
        },

        {
            data: 'ago 2011 - jan 2011',
            titulo: 'Professora de Informátoca e Web Designer',
            subtitulo: 'Microcamp SP',
            descricao:
                'Ensino das tecnologias, programas e ferramentas básicas do computador. Ensino das linguagens de programação/formatação e softwares para o desenvolvimento de sites e projetos publicitários.',
        },
        {
            data: 'ago 2010 - jan 2012',
            titulo: 'Estágio em Tecnologia da Informação',
            subtitulo: 'Colégio Albert Sabin',
            descricao:
                'Suporte a usuários internos, solução e reparação de problemas em computadores e impressoras. Instalação, configuração e atualização de softwares. Responsável pela manutenção, inclusão de páginas, controle do banco de dados e toda a parte de administração dos sites dos colégios.',
        },
    ];
    constructor() {}

    ngOnInit(): void {}
}
