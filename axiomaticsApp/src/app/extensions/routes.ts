import { Routes } from '@angular/router';

import { TreeDiagramComponent } from '../components/tree-diagram/tree-diagram.component';
import { InputSectionComponent } from '../components/imput-section/input-section.component';
import { ImportSectionComponent } from '../components/import-section/import-section.component';

export const routes: Routes = [
    { path: 'importXml', component: ImportSectionComponent , pathMatch: 'full'},
    { path: 'inputXml', component: InputSectionComponent, pathMatch: 'full' },
    { path: 'treeDiagram', component: TreeDiagramComponent, pathMatch: 'full' },
    { path: '', redirectTo:  'iimportXml', pathMatch: 'full'},
    { path: '**', redirectTo:  'inputXml', pathMatch: 'full'},
]