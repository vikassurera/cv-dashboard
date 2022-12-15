import {DataCardI} from "../components/DataCard";

export interface SectionModelI {
    id: string;
    title: string;
    description?: string[];
    data: DataCardI[];
    cardType: string;
}

export enum CardType{
    'timelineView'= 'timelineView',
    'gridView1'= 'gridView1',
    'gridView2'= 'gridView2',
}

export default class SectionModel {
    id: string;
    title: string;
    description?: string[];
    data: DataCardI[];
    cardType: CardType;

    constructor(data: SectionModelI) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.data = data.data;
        this.cardType = data.cardType as CardType;
    }

}