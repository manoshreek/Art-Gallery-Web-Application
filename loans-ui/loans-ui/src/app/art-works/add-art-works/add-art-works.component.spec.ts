import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtWorksComponent } from './add-art-works.component';

describe('AddArtWorksComponent', () => {
  let component: AddArtWorksComponent;
  let fixture: ComponentFixture<AddArtWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArtWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
