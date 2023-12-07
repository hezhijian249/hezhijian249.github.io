import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorToolComponent } from './operator-tool.component';

describe('OperatorToolComponent', () => {
  let component: OperatorToolComponent;
  let fixture: ComponentFixture<OperatorToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperatorToolComponent]
    });
    fixture = TestBed.createComponent(OperatorToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
