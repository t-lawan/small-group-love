export class ProjectModel {
    id;
    title;
    isCurrent;
    start_date;
    end_date;
    content;
    constructor(id,title, isCurrent, start_date, end_date, content) {
        this.id = id;
        this.title = title;
        this.isCurrent = isCurrent;
        this.start_date = start_date;
        this.end_date = end_date;
        this.content = content;
    }
}