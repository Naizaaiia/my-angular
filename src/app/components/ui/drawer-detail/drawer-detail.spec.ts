import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerDetail } from './drawer-detail';

describe('DrawerDetail', () => {
  let component: DrawerDetail;
  let fixture: ComponentFixture<DrawerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
