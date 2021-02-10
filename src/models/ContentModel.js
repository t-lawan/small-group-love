export class ContentModel {
    id;
    title;
    images;
    text;
    type;
    constructor(id,title, type, images, text) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.images = images;
        this.text = text;

    }
}