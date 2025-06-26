import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';
import { TooltipModule } from 'primeng/tooltip';

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
  selector: 'app-drawer-detail',
  standalone: true,
  imports: [
    CommonModule,
    DrawerModule,
    ButtonModule,
    AvatarModule,
    TooltipModule,
  ],
  templateUrl: './drawer-detail.html',
  styleUrl: './drawer-detail.css',
})
export class DrawerDetail implements OnInit {
  @Input() dataFetchHistory: DataFetchHistory = {} as DataFetchHistory;
  @ViewChild('drawerRef') drawerRef!: Drawer;

  ngOnInit() {
    const successCount = Math.round(
      (this.dataFetchHistory.successPercentage / 100) * 20
    ); // 20 แท่ง
    const failCount = 20 - successCount;

    this.dataFetchHistory.bars = [
      ...Array(successCount).fill('success'),
      ...Array(failCount).fill('fail'),
    ];
  }

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }
  visible: boolean = false;

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
}
