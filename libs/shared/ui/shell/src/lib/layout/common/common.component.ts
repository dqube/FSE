import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-common',
  template: `
    <nz-layout>
      <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzTrigger]="null">
        <div class="logo"></div>

        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-submenu nzTitle="User" nzIcon="user">
            <ul>
              <li
                nz-menu-item
                routerLink=""
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                Profiles
              </li>
              <li
                nz-menu-item
                routerLink="/admin"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                Admin
              </li>
              <li
                nz-menu-item
                nz-menu-item
                routerLink="create"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                Create
              </li>
            </ul>
          </li>
          <li nz-submenu nzTitle="Team" nzIcon="team">
            <ul>
              <li
                nz-menu-item
                routerLink="create"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                Profile create
              </li>
              <li nz-menu-item>Team 2</li>
            </ul>
          </li>
          <li nz-menu-item>
            <i nz-icon nzType="file"></i>
            <span>File</span>
          </li>
        </ul>
      </nz-sider>
      <nz-layout>
        <nz-header>
          <i
            class="trigger"
            nz-icon
            [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'"
            (click)="isCollapsed = !isCollapsed"
          ></i>
        </nz-header>
        <nz-content>
          <nz-breadcrumb>
            <nz-breadcrumb-item>User</nz-breadcrumb-item>
            <nz-breadcrumb-item>Bill</nz-breadcrumb-item>
          </nz-breadcrumb>
          <div class="inner-content">
            Bill is a cat.
            <router-outlet></router-outlet>
          </div>
        </nz-content>
        <nz-footer>Ant Design ©2020 Implement By Angular</nz-footer>
      </nz-layout>
    </nz-layout>
  `,
  styles: [
    `
      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
      }

      .trigger:hover {
        color: #1890ff;
      }

      .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
      }

      nz-header {
        background: #fff;
        padding: 0;
      }

      nz-content {
        margin: 0 16px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      .inner-content {
        padding: 24px;
        background: #fff;
        min-height: 460px;
      }

      nz-footer {
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonComponent {
  isCollapsed = false;
}
