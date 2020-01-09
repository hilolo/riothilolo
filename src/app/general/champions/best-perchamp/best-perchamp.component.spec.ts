import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPerchampComponent } from './best-perchamp.component';

describe('BestPerchampComponent', () => {
  let component: BestPerchampComponent;
  let fixture: ComponentFixture<BestPerchampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPerchampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPerchampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
