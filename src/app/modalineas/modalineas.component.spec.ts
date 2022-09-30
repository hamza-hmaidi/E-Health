import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalineasComponent } from './modalineas.component';

describe('ModalineasComponent', () => {
  let component: ModalineasComponent;
  let fixture: ComponentFixture<ModalineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalineasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
