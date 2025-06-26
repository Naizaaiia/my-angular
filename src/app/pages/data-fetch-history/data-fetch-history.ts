import { Component } from '@angular/core';
import { DataFetchHistoryMain } from '../../components/data-fetch-history/data-fetch-history-main/data-fetch-history-main';

@Component({
  selector: 'app-data-fetch-history',
  imports: [DataFetchHistoryMain],
  templateUrl: './data-fetch-history.html',
  styleUrl: './data-fetch-history.css',
})
export class DataFetchHistory {}
