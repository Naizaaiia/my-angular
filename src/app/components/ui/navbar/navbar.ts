import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuItem } from "primeng/api";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from "primeng/button";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { MenuModule } from "primeng/menu";
import { Router, RouterModule, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-navbar",
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
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar implements OnInit {
  items: MenuItem[] = [];
  breadcrumbItems: MenuItem[] = [];
  userMenuItems: MenuItem[] = [];

  // Define route labels for breadcrumb
  private routeLabels: { [key: string]: string } = {
    "": "ติดตามการกำหนดราคา",
    "data-fetch-history": "ประวัติการดังข้อมูล",
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Menu items สำหรับ hamburger menu
    this.items = [
      { label: "ติดตามการกำหนดราคา", icon: "pi pi-home", routerLink: "/" },
      {
        label: "ประวัติการดังข้อมูล",
        icon: "pi pi-chart-line",
        routerLink: "/data-fetch-history",
      },
    ];

    // Initialize breadcrumb with current route
    this.updateBreadcrumb();

    // Listen to route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateBreadcrumb();
      });

    // User dropdown menu
    this.userMenuItems = [
      { label: "โปรไฟล์", icon: "pi pi-user" },
      { label: "การตั้งค่า", icon: "pi pi-cog" },
      { separator: true },
      { label: "ออกจากระบบ", icon: "pi pi-sign-out" },
    ];
  }

  private updateBreadcrumb() {
    const currentUrl = this.router.url;
    const segments = currentUrl.split("/").filter((segment) => segment !== "");

    this.breadcrumbItems = [];

    // Always add home as the first item
    this.breadcrumbItems.push({
      label: "ติดตามการกำหนดราคา",
      routerLink: "/",
    });

    // Add path segments
    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath += "/" + segment;
      const label =
        this.routeLabels[segment] || this.formatSegmentLabel(segment);

      if (index === segments.length - 1) {
        // Last segment - no link (current page)
        this.breadcrumbItems.push({ label: label });
      } else {
        // Intermediate segments - with link
        this.breadcrumbItems.push({
          label: label,
          routerLink: currentPath,
        });
      }
    });

    // If we're on home page, only show the home breadcrumb
    if (segments.length === 0) {
      this.breadcrumbItems = [{ label: "ติดตามการกำหนดราคา" }];
    }
  }

  private formatSegmentLabel(segment: string): string {
    // Convert kebab-case to readable format
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
}
