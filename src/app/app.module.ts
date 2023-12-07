import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormRenderModule } from "../../projects/form-render/src/lib/form-render.module";
import { CodemirrorExampleComponent } from './codemirror-example/codemirror-example.component';
import { EditorModule } from "../../projects/editor/src/lib/editor.module";
import { MonacoComponent } from './monaco/monaco.component';
import { TableRenderModule } from "table-render";
import { GeneralComponent } from './general/general.component';
import { GeneratorModule } from "generator";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    CodemirrorExampleComponent,
    MonacoComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormRenderModule,
    TableRenderModule,
    EditorModule.forRoot(),
    GeneratorModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
