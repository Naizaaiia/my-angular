import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-data-fetch-history-bar',
  imports: [BadgeModule, ButtonModule],
  templateUrl: './data-fetch-history-bar.html',
  styleUrl: './data-fetch-history-bar.css',
})
export class DataFetchHistoryBar {}
