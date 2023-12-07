import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodemirrorExampleComponent } from "./codemirror-example/codemirror-example.component";
import { MonacoComponent } from "./monaco/monaco.component";
import { GeneralComponent } from "./general/general.component";

const routes: Routes = [
    { path: '', component: GeneralComponent },
    { path: 'codemirror', component: CodemirrorExampleComponent },
    { path: 'monaco', component: MonacoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
