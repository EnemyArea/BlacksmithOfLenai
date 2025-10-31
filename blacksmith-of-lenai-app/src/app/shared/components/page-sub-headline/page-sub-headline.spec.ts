import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubHeadline } from './page-sub-headline';

describe('PageSubHeadline', () => {
  let component: PageSubHeadline;
  let fixture: ComponentFixture<PageSubHeadline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSubHeadline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSubHeadline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
