import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFetchHistoryBar } from './data-fetch-history-bar';

describe('DataFetchHistoryBar', () => {
  let component: DataFetchHistoryBar;
  let fixture: ComponentFixture<DataFetchHistoryBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFetchHistoryBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFetchHistoryBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
