import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMissionComponent } from './request-mission.component';

describe('RequestMissionComponent', () => {
  let component: RequestMissionComponent;
  let fixture: ComponentFixture<RequestMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
