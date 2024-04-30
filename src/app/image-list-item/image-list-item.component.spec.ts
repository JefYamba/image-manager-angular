import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListItemComponent } from './image-list-item.component';

describe('ImageListItemComponent', () => {
  let component: ImageListItemComponent;
  let fixture: ComponentFixture<ImageListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
