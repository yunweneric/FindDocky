import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyfoundComponent } from './recentlyfound.component';

describe('RecentlyfoundComponent', () => {
  let component: RecentlyfoundComponent;
  let fixture: ComponentFixture<RecentlyfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
