import { Component } from '@angular/core';
import { PageHeadline } from '../../shared/components/page-headline/page-headline';

@Component({
  selector: 'app-home',
  imports: [PageHeadline],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
