import { NgModule } from '@angular/core';
import { GeneratorComponent } from './generator.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ComponentLibraryComponent } from './components/component-library/component-library.component';
import { NzInputModule } from "ng-zorro-antd/input";
import { NzIconModule } from "ng-zorro-antd/icon";
import { FormsModule } from "@angular/forms";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzCardModule } from "ng-zorro-antd/card";
import { DesignerComponent } from './components/designer/designer.component';
import { NzFormModule } from "ng-zorro-antd/form";
import { CoreModule } from "core";
import { PropertiesPanelComponent } from './components/properties-panel/properties-panel.component';
import { FormRenderModule } from "form-render";
import { HeaderComponent } from './components/header/header.component';
import { NzButtonModule } from "ng-zorro-antd/button";
import { OperatorToolComponent } from './components/operator-tool/operator-tool.component';
import { NzToolTipModule } from "ng-zorro-antd/tooltip";

@NgModule({
  declarations: [
    GeneratorComponent,
    ComponentLibraryComponent,
    DesignerComponent,
    PropertiesPanelComponent,
    HeaderComponent,
    OperatorToolComponent
  ],
  imports: [
    DragDropModule,
    CommonModule,
    NzInputModule,
    NzIconModule,
    FormsModule,
    NzTabsModule,
    NzCollapseModule,
    NzCardModule,
    NzFormModule,
    CoreModule,
    FormRenderModule,
    NzButtonModule,
    NgOptimizedImage,
    NzToolTipModule
  ],
  exports: [
    GeneratorComponent
  ]
})
export class GeneratorModule { }
