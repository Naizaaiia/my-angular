import { Component, OnInit } from '@angular/core';
import { DataFetchHistoryBar } from '../data-fetch-history-bar/data-fetch-history-bar';
import { DataFetchHistoryFilter } from '../data-fetch-history-filter/data-fetch-history-filter';
import { Table } from '../../ui/table/table';

@Component({
  selector: 'app-data-fetch-history-main',
  imports: [DataFetchHistoryBar, DataFetchHistoryFilter, Table],
  templateUrl: './data-fetch-history-main.html',
  styleUrl: './data-fetch-history-main.css',
})
export class DataFetchHistoryMain implements OnInit {
  users: any[] = [];

  ngOnInit() {
    this.users = [
      { id: '1', name: 'Alice', email: 'alice@example.com', role: 'Admin' },
      { id: '2', name: 'Bob', email: 'bob@example.com', role: 'User' },
      {
        id: '3',
        name: 'Charlie',
        email: 'charlie@example.com',
        role: 'Moderator',
      },
    ];
  }
}
