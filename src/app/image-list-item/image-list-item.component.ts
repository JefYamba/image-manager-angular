import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-image-list-item',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './image-list-item.component.html',
  styleUrl: './image-list-item.component.css'
})
export class ImageListItemComponent implements OnInit{
    imageUrl: string = "";

    ngOnInit(): void {
        this.imageUrl = "assets/default.png"
    }
}
