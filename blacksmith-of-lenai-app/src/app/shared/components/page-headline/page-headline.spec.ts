import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeadline } from './page-headline';

describe('PageHeadline', () => {
  let component: PageHeadline;
  let fixture: ComponentFixture<PageHeadline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeadline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeadline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
