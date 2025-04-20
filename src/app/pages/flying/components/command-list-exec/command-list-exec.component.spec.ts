import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandListExecComponent } from './command-list-exec.component';

describe('CommandListExecComponent', () => {
  let component: CommandListExecComponent;
  let fixture: ComponentFixture<CommandListExecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandListExecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandListExecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
