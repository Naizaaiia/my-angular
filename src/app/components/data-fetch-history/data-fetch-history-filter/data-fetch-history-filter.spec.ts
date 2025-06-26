import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFetchHistoryFilter } from './data-fetch-history-filter';

describe('DataFetchHistoryFilter', () => {
  let component: DataFetchHistoryFilter;
  let fixture: ComponentFixture<DataFetchHistoryFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFetchHistoryFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFetchHistoryFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
