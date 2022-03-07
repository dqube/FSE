import { Component } from '@angular/core';

@Component({
  selector: 'app-common',
  template: `
    <nz-layout>
      <nz-sider
        nzCollapsible
        [(nzCollapsed)]="isCollapsed"
        [nzTrigger]="null"
        nzTheme="light"
      >
        <div class="logo">
        <img src="./assets/images/logo/logo-fold.png">
        <span>FSE</span>
        </div>

        <ul nz-menu nzTheme="light" nzMode="inline">
          <li nz-submenu nzTitle="Profilie" nzIcon="user">
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
          <li nz-submenu nzTitle="Admin">
            <ul>
              <li
                nz-menu-item
                routerLink="create"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                Search
              </li>
            </ul>
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
          <div class="inner-content">
            <router-outlet></router-outlet>
          </div>
        </nz-content>
        <nz-footer>FSE Assesment 2022 @469001</nz-footer>
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
      div.header-wrapper {
        padding: 12px;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        overflow: hidden;
        line-height: 0;

        img {
          margin-left: 8px;
          width: 40px;
          height: 40px;
        }

        .username-text {
          margin-left: 8px;
          flex: 1;
          line-height: 40px;
          font-size: 14px;
          color: white;
        }

        .header-btn {
          color: white;

          i {
            font-size: 18px;
          }
        }
      }

      .list-wrapper {
        overflow-y: scroll;
        position: absolute;
        top: 60px;
        bottom: 48px;
        width: 100%;
        padding-bottom: 20px;

        .add-list-btn-wrapper {
          margin-top: 8px;
          text-align: center;
        }
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
  ]
})
export class CommonComponent {
  isCollapsed = false;
}
