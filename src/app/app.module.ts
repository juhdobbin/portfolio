import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { FixedMenuComponent } from './fixed-menu/fixed-menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormacaoComponent } from './formacao/formacao.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { CursosComponent } from './cursos/cursos.component';
import { SobreComponent } from './sobre/sobre.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
    declarations: [
        AppComponent,
        FixedMenuComponent,
        FormacaoComponent,
        TimelineComponent,
        ExperienciaComponent,
        CursosComponent,
        SobreComponent,
        HabilidadesComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatCardModule,
        MatTooltipModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
