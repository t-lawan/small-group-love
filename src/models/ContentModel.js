export class ContentModel {
    id;
    title;
    images;
    text;
    isTextTranslucent;
    type;
    image_list;
    constructor(id,title, type, images, image_list, text, isTextTranslucent = false) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.images = images;
        this.image_list = image_list;
        this.text = text;
        this.isTextTranslucent = isTextTranslucent;
    }
}