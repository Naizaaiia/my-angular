import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFetchHistoryMain } from './data-fetch-history-main';

describe('DataFetchHistoryMain', () => {
  let component: DataFetchHistoryMain;
  let fixture: ComponentFixture<DataFetchHistoryMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFetchHistoryMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFetchHistoryMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
