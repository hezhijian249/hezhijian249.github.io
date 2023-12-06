import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormField } from "form-render/lib/entity/FormField";

@Component({
  selector: 'h-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
  providers: []
})
export class GeneratorComponent implements OnInit {
  selectComponent?: FormField;

  @Output()
  componentLibrariesChange: EventEmitter<FormField[]> = new EventEmitter<FormField[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectComponentChange(selectComponent: FormField) {
    this.selectComponent = selectComponent;
  }

  propertiesChange(data: any) {
    if (data.config.key && this.selectComponent) {
      const key: string = data.config.key;
      const selectComponent = this.selectComponent;
      selectComponent[key as keyof typeof selectComponent] = data.value;
    }
  }

  componentLibrariesChangeHandle(componentLibraries: FormField[]) {
    this.componentLibrariesChange.emit(componentLibraries);
  }

}
