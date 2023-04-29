import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDodComponent } from './user-dod.component';

describe('UserDodComponent', () => {
  let component: UserDodComponent;
  let fixture: ComponentFixture<UserDodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
