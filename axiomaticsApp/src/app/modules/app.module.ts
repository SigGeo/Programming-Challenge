/*Modules*/
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from '../modules/app-routing.module';

/*Components*/
import { HeaderComponent } from '../components/header/header.component';
import { AppComponent } from '../components/app-component/app.component';
import { TreeDiagramComponent} from '../components/tree-diagram/tree-diagram.component';
import { InputSectionComponent } from '../components/imput-section/input-section.component';
import { ImportSectionComponent } from '../components/import-section/import-section.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TreeDiagramComponent,
    InputSectionComponent,
    ImportSectionComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }