import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolIneasComponent } from './protocol-ineas.component';

describe('ProtocolIneasComponent', () => {
  let component: ProtocolIneasComponent;
  let fixture: ComponentFixture<ProtocolIneasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocolIneasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolIneasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
