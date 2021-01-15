import {Component, ElementRef, HostListener, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'ng-image-rows',
    styleUrls: ['./ng-image-rows.component.css'],
    template: `
        <a *ngFor="let image of images" [attr.href]="image.href">
            <img
                [attr.alt]="image.alt"
                [attr.src]="image.src"
                [style.margin]="margin + 'px'"
                [style.width]="imageWidth + 'px'"
            />
        </a>
    `
})

export class NgImageRowsComponent implements OnInit {

    imageWidth = 0;

    @Input() images: {
        alt?: string,
        href?: string,
        src: string
    }[];
    @Input() margin: number;
    @Input() scrollBarWidth: number;
    @Input() targetWidth: number;

    @HostListener('window:resize') onResize() {
        this.updateImageSize();
    }

    constructor(private element: ElementRef) { }

    ngOnInit(): void {
        this.updateImageSize(this.scrollBarWidth);
    }




    updateImageSize(scrollBarWidth = 0): void {
        const parentWidth = this.element.nativeElement.clientWidth - scrollBarWidth;
        const eachWidth = this.targetWidth - (this.margin * 2);
        const imagesPerRow = Math.floor(parentWidth / eachWidth);
        const totalMarginSpace = imagesPerRow * (this.margin * 2);
        const netImageSpace = parentWidth - totalMarginSpace;
        this.imageWidth = Math.floor((netImageSpace / imagesPerRow) - 0.1);
    }



}
