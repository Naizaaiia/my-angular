import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { DrawerDetail } from '../drawer-detail/drawer-detail';

interface DataFetchHistory {
  id: string;
  date: string;
  time: string;
  processType: string;
  status: 'completed' | 'error' | 'processing';
  withdrawStatus: 'completed' | 'error';
  totalItems: number;
  successCount: number;
  errorCount: number;
  successPercentage: number;
  errorPercentage: number;
  executor: {
    name: string;
    initials: string;
    id: string;
  };
  referenceNumber: string;
  bars: ('success' | 'fail')[];
}

@Component({
  selector: 'app-table',
  imports: [
    TableModule,
    ButtonModule,
    PaginatorModule,
    CommonModule,
    TooltipModule,
    DrawerDetail,
  ],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit {
  @Input() dataFetchHistory: DataFetchHistory[] = [
    {
      id: '1',
      date: '12 มิ.ย. 2025',
      time: '13:48',
      processType: 'ข้อมูลสินค้า',
      status: 'completed',
      withdrawStatus: 'completed',
      totalItems: 160,
      successCount: 160,
      errorCount: 0,
      successPercentage: 100,
      errorPercentage: 0,
      executor: {
        name: 'Olivia Rhye',
        initials: 'OR',
        id: '17383737',
      },
      referenceNumber: 'สำเร็จ',
      bars: [],
    },
    {
      id: '2',
      date: '12 มิ.ย. 2025',
      time: '09:33',
      processType: 'ข้อมูลสินค้า',
      status: 'processing',
      withdrawStatus: 'error',
      totalItems: 160,
      successCount: 120,
      errorCount: 40,
      successPercentage: 70,
      errorPercentage: 30,
      executor: {
        name: 'System',
        initials: 'SY',
        id: 'Scheduling_Job',
      },
      referenceNumber: 'ล้มเหลวบางรายการ',
      bars: [],
    },
    {
      id: '3',
      date: '11 มิ.ย. 2025',
      time: '13:48',
      processType: 'ข้อมูลสินค้า',
      status: 'error',
      withdrawStatus: 'error',
      totalItems: 160,
      successCount: 0,
      errorCount: 160,
      successPercentage: 0,
      errorPercentage: 100,
      executor: {
        name: 'Olivia Rhye',
        initials: 'OR',
        id: '17383737',
      },
      referenceNumber: 'ล้มเหลว',
      bars: [],
    },
    {
      id: '4',
      date: '10 มิ.ย. 2025',
      time: '13:48',
      processType: 'ข้อมูลราคา',
      status: 'processing',
      withdrawStatus: 'completed',
      totalItems: 160,
      successCount: 120,
      errorCount: 40,
      successPercentage: 33,
      errorPercentage: 67,
      executor: {
        name: 'Olivia Rhye',
        initials: 'OR',
        id: '17383737',
      },
      referenceNumber: 'ล้มเหลวบางรายการ',
      bars: [],
    },
    {
      id: '5',
      date: '10 มิ.ย. 2025',
      time: '13:48',
      processType: 'ข้อมูลราคา',
      status: 'processing',
      withdrawStatus: 'completed',
      totalItems: 160,
      successCount: 120,
      errorCount: 40,
      successPercentage: 89,
      errorPercentage: 11,
      executor: {
        name: 'Olivia Rhye',
        initials: 'OR',
        id: '17383737',
      },
      referenceNumber: 'ล้มเหลวบางรายการ',
      bars: [],
    },
  ];

  // Pagination properties
  currentPage: number = 1;
  totalPages: number = 10;
  totalRecords: number = 200;
  rowsPerPage: number = 20;

  ngOnInit() {
    this.dataFetchHistory.forEach((item) => {
      const successCount = Math.round((item.successPercentage / 100) * 20); // 20 แท่ง
      const failCount = 20 - successCount;

      item.bars = [
        ...Array(successCount).fill('success'),
        ...Array(failCount).fill('fail'),
      ];
    });
  }

  // Helper methods
  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'completed':
        return 'status-badge-completed';
      case 'error':
        return 'status-badge-error';
      case 'processing':
        return 'status-badge-processing';
      default:
        return '';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'completed':
        return 'ข้อมูลสินค้า';
      case 'error':
        return 'ข้อมูลราคา';
      case 'processing':
        return 'ข้อมูลราคา';
      default:
        return '';
    }
  }

  // Pagination methods
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number | string): void {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = [];
    const totalPages = this.totalPages;
    const current = this.currentPage;

    if (totalPages <= 7) {
      // Show all pages if total is 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);

      if (current <= 3) {
        // Show pages 1, 2, 3, ..., last-2, last-1, last
        for (let i = 2; i <= 3; i++) {
          pages.push(i);
        }
        pages.push('...');
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else if (current >= totalPages - 2) {
        // Show pages 1, 2, 3, ..., last-2, last-1, last
        for (let i = 2; i <= 3; i++) {
          pages.push(i);
        }
        pages.push('...');
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show 1, ..., current-1, current, current+1, ..., last
        pages.push('...');
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  }
}
