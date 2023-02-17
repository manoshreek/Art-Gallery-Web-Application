import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArtWorksComponent } from './view-art-works.component';

describe('ViewArtWorksComponent', () => {
  let component: ViewArtWorksComponent;
  let fixture: ComponentFixture<ViewArtWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewArtWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArtWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
