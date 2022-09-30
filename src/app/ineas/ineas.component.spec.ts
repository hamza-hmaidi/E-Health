import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IneasComponent } from './ineas.component';

describe('IneasComponent', () => {
  let component: IneasComponent;
  let fixture: ComponentFixture<IneasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IneasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IneasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
