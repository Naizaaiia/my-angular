import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

interface Dropdown {
  name: string;
  code: string;
}

interface Display {
  username: string;
  password: string;
  date: Date | string | undefined;
  jobType: Dropdown | undefined;
  result: Dropdown | undefined;
  user: Dropdown | undefined;
}

interface Task {
  username: string;
  password: string;
  date: Date | string | undefined;
  jobType: Dropdown | undefined;
  result: Dropdown | undefined;
  user: Dropdown | undefined;
}

@Component({
  selector: 'app-data-fetch-history-filter',
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    AutoCompleteModule,
    DatePickerModule,
    IconFieldModule,
    InputIconModule,
    SelectModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './data-fetch-history-filter.html',
  styleUrl: './data-fetch-history-filter.css',
})
export class DataFetchHistoryFilter {
  username: string = '';
  password: string = '';
  date: Date = new Date();
  display: Display = {
    username: '',
    password: '',
    date: undefined,
    jobType: undefined,
    result: undefined,
    user: undefined,
  };

  tasks: Task[] = [];

  mockData: Dropdown[] = [
    { name: 'ทั้งหมด', code: 'ALL' },
    { name: '1', code: '1' },
    { name: '2', code: '2' },
    { name: 'Other', code: '0' },
  ];

  mockUsers: Dropdown[] = [
    { name: 'กอไก่ กอไก่', code: '1' },
    { name: 'ขอไข่ ขอไข่', code: '2' },
    { name: 'คอหมู คอหมู', code: '3' },
    { name: 'งองู งองู', code: '4' },
  ];

  selectedJobType?: Dropdown = { name: 'ทั้งหมด', code: 'ALL' };
  selectedResult?: Dropdown = { name: 'ทั้งหมด', code: 'ALL' };
  filteredUser: Dropdown[] = [];
  selectedUser?: Dropdown;

  filterUser(event: any) {
    const query = event.query.toLowerCase();
    this.filteredUser = this.mockUsers.filter((c) =>
      c.name.toLowerCase().includes(query)
    );
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.display.username = this.username;
      this.display.password = this.password;
      this.display.date = this.date.toLocaleDateString();
      this.display.user = this.selectedUser || undefined;

      // เก็บข้อมูลลง tasks array
      const newTask: Task = {
        username: this.username,
        password: this.password,
        date: this.date.toLocaleDateString(),
        jobType: this.selectedJobType || undefined,
        result: this.selectedResult || undefined,
        user: this.selectedUser || undefined,
      };
      this.tasks.push(newTask);

      // Reset form
      this.username = '';
      this.password = '';
      this.date = new Date();
      this.selectedUser = undefined;
      form.resetForm();
    }
  }
}
