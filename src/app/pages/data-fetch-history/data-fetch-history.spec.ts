import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFetchHistory } from './data-fetch-history';

describe('DataFetchHistory', () => {
  let component: DataFetchHistory;
  let fixture: ComponentFixture<DataFetchHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFetchHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFetchHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
