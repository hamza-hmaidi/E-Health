import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabineasComponent } from './tabineas.component';

describe('TabineasComponent', () => {
  let component: TabineasComponent;
  let fixture: ComponentFixture<TabineasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabineasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
