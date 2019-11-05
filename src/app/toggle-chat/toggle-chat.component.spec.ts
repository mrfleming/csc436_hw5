import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleChatComponent } from './toggle-chat.component';

describe('ToggleChatComponent', () => {
  let component: ToggleChatComponent;
  let fixture: ComponentFixture<ToggleChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
