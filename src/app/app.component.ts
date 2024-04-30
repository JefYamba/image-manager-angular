import {Component, inject, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {ImageSelectorComponent} from "./image-selector/image-selector.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ImageListItemComponent} from "./image-list-item/image-list-item.component";
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgOptimizedImage, ImageSelectorComponent, ImageListItemComponent],
    providers: [HttpClient],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{
    file: Blob | undefined;
    private modalService = inject(NgbModal);

    constructor(private http: HttpClient) {
    }

    select(event: Blob) {
        this.http.post("http://localhost:8080/image_manager/v1/images/upload", {"name": "image", "image": event}).subscribe({
            next: (e: any) => {
                console.log(e)
            },
            error: (e: any) => {
                console.log(e)
            }
        })
    }
    openVerticallyCentered(content: TemplateRef<any>) {
        this.modalService.open(content, { centered: true });
    }

    loadImages(){
        this.http.get("http://localhost:8080/image_manager/v1/images").subscribe({
            next: (e: any) => {
                console.table(e)
            },
            error: (e: any) => {
                console.log(e)
            }
        })
    }

    ngOnInit(): void {
        // this.loadImages()
    }
}
