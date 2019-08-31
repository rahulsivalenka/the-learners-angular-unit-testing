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
    const appEl = de.nativeElement;
    expect(appEl.querySelector('h1').textContent).toContain(
      'Welcome to angular-unit-testing!'
    );
  });

  describe('add method', () => {
    it('should accept two numbers', () => {
      console.log('add');
      // Arrange
      let args;
      spyOn(component, 'add').and.callFake((...args1) => {
        console.log('fake add');
        args = args1;
      });

      // Act
      component.add(1, 2);

      // Assert
      expect(args.length).toBe(2);
      expect(args).toEqual([1, 2]);
    });

    it('should add two numbers that are passed in', () => {
      console.log('add 2');
      // Act
      const result = component.add(1, 2);

      // Assert
      expect(result).toBe(3);
    });
  });
});
