import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let component: AppComponent;

  beforeEach(async(() => {
    console.log('beforeEach 1');
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    console.log('beforeEach 2');
    // Arrange
    fixture = TestBed.createComponent(AppComponent);
    de = fixture.debugElement;
    component = de.componentInstance;
  });

  it('should create the app', () => {
    console.log('it 1');
    // Assert
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-unit-testing'`, () => {
    console.log('it 2');
    expect(component.title).toEqual('angular-unit-testing');
  });

  it('should render title in a h1 tag', () => {
    console.log('it 3');
    fixture.detectChanges();
    const compiled = de.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to angular-unit-testing!'
    );
  });
});
