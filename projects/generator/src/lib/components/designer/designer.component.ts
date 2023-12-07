import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { ComponentLibrary } from "../../entity/componentLibrary";
import { createGroup, FormField } from "form-render";
import { cloneDeep } from "lodash";

@Component({
  selector: 'h-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit {

  formGroup: UntypedFormGroup | undefined;

  componentLibraries: FormField[] = [];

  @Input()
  selectComponent?: FormField;

  @Output()
  selectComponentChange: EventEmitter<FormField> = new EventEmitter<FormField>();

  @Output()
  componentLibrariesChange: EventEmitter<FormField[]> = new EventEmitter<FormField[]>();

  constructor(private formBuild: UntypedFormBuilder) {
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const cloneData: FormField[] = cloneDeep(event.previousContainer.data).map((item: ComponentLibrary) => item.schema);
      cloneData[event.previousIndex].id = new Date().getTime();
      cloneData[event.previousIndex].key = 'field' + new Date().getMilliseconds();
      transferArrayItem(
        cloneData,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.formGroup = createGroup(this.formBuild, this.componentLibraries);
    this.componentLibrariesChange.emit(this.componentLibraries);
  }

  evenPredicate() {
    return true;
  }

  resolveUndefined(value: any) {
    if (value === undefined) {
      return null;
    }
    return value;
  }

  clickComponentLibrary(event: Event, selectComponent: FormField) {
    event.stopPropagation();
    this.selectComponent = selectComponent;
    this.selectComponentChange.emit(this.selectComponent);
  }
}
