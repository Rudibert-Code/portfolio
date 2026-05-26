import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjetcs } from './my-projetcs';

describe('MyProjetcs', () => {
  let component: MyProjetcs;
  let fixture: ComponentFixture<MyProjetcs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjetcs],
    }).compileComponents();

    fixture = TestBed.createComponent(MyProjetcs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
