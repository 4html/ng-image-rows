# <ng-image-rows>

---

Pass in properties to construct images evenly in rows.
The **ng-image-element** element does the following:

1. Contructs each link and image.
2. Gets the current parent width.
3. Determines how many images should fit in that space (using the targetWidth and margin).
4. Sets the images to a division of the row width to make the row flush.

---

    import { NgImageRowsModule } from 'ng-image-rows';

---

    <ng-image-rows
        margin="20"
        scrollBarWidth="17"
        targetWidth="270"
        [images]="[
            {
                alt: '..',
                href: '..',
                src: '..'
            }
        ]
    ></ng-image-rows>

---

####Live Example:

https://greatearthgallery.com

Resize the home page and see how the thumbnails fit into justified rows.
The images wrap as inline-block.
Without this library there would often be extra space on the right breaking the symmetry of the grid.

---
