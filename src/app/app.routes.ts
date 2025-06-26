import { Routes } from '@angular/router';
import { DataFetchHistory } from './pages/data-fetch-history/data-fetch-history';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'data-fetch-history', component: DataFetchHistory },
];
