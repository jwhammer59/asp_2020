import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Bulletins', icon: 'pi pi-file' },
      {
        label: 'Ministries',
        icon: '',
        items: [
          { label: 'Liturgical', icon: '' },
          { label: 'Religious', icon: '' },
          { label: 'Youth Group', icon: '' },
          { label: 'CYO', icon: '' },
          { label: 'Stewardship', icon: '' },
        ],
      },
      { label: 'Sacraments', icon: '' },
      { label: 'Contact', icon: 'pi pi-users' },
      { label: 'Media', icon: 'pi pi-video' },
      { label: 'Calendar', icon: 'pi pi-calendar' },
      { label: 'Documents', icon: 'pi pi-folder' },
    ];
  }
}
