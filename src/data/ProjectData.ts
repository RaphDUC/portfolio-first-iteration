export default class ProjectData {
    id: string;
    name: string;
    htmlDescription: string;
    htmlDescriptionFr: string;
    iconUrl: string; // used as thumbnail
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    accentColor: string; // color of title bar

    constructor(id: string, name: string, iconUrl: string, html: string, accentColor = "#000000", isHigh = false, isWide = false, htmlFr = "") {
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.htmlDescriptionFr = htmlFr;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
    }
}
