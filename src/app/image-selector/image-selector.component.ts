import {Component, EventEmitter, Input, input, numberAttribute, OnInit, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-image-selector',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.css'
})
export class ImageSelectorComponent implements OnInit{
    imageUrl: string = "";
    @Input({transform: numberAttribute}) imgHeight: number = 100;
    @Input({transform: numberAttribute}) imgWidth: number = 100;
    @Input() buttonText: string = "Select image";

    @Output() fileSelected:EventEmitter<Blob> = new EventEmitter();


    ngOnInit(): void {
        this.imageUrl = "assets/default.png"
    }

    selectImage(event: any) {
        if (event.target.files) {
            const file: Blob = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e: any) => {
                this.imageUrl = e.target.result;
            }
            this.fileSelected.emit(file);
        }
    }
}
