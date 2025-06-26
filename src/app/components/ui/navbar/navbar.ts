import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    BreadcrumbModule,
    AvatarModule,
    BadgeModule,
    MenuModule,
    RouterModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  items: MenuItem[] = [];
  breadcrumbItems: MenuItem[] = [];
  userMenuItems: MenuItem[] = [];

  ngOnInit() {
    // Menu items สำหรับ hamburger menu
    this.items = [
      { label: 'หน้าแรก', icon: 'pi pi-home', routerLink: '/' },
      {
        label: 'ประวัติการดังข้อมูล',
        icon: 'pi pi-chart-line',
        routerLink: '/data-fetch-history',
      },
    ];

    // Breadcrumb items
    this.breadcrumbItems = [
      { label: 'ติดตามการกำหนดราคา' },
      { label: 'ประวัติการดังข้อมูล', route: '/data-fetch-history' },
    ];

    // User dropdown menu
    this.userMenuItems = [
      { label: 'โปรไฟล์', icon: 'pi pi-user' },
      { label: 'การตั้งค่า', icon: 'pi pi-cog' },
      { separator: true },
      { label: 'ออกจากระบบ', icon: 'pi pi-sign-out' },
    ];
  }
}
