import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyRepeatComponent } from './repeat.component';


describe('RepeatComponent', () => {
  let component: FormlyRepeatComponent;
  let fixture: ComponentFixture<FormlyRepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyRepeatComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
