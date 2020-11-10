import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeewhatIlearnedComponent } from './seewhat-ilearned.component';

describe('SeewhatIlearnedComponent', () => {
  let component: SeewhatIlearnedComponent;
  let fixture: ComponentFixture<SeewhatIlearnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeewhatIlearnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeewhatIlearnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
