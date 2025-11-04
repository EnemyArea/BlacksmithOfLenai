import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';
import { PageCard } from '../../shared/components/page-card/page-card';

@Component({
  selector: 'app-storage',
  imports: [PageHeadline, PageCard],
  templateUrl: './storage.html',
  styleUrl: './storage.css',
})
export class Storage {}
