import {Dayjs} from "dayjs";

export interface IEvent {
    id: number;
    title: string;
    ticketLink: string;
    eventLink: string;
    dateTime: Dayjs;
    duration: number;
    rating: number;
    imageLink: string;
}


export interface IApiEvent {
    ID: string;
    IBLOCK_ID: string;
    NAME: string;
    IBLOCK_SECTION_ID: null | string;
    CREATED_BY: string;
    BP_PUBLISHED: string;
    CODE: null | string;
    PROPERTY_326: string;
    PROPERTY_327: string;
    PROPERTY_328: string;
    PROPERTY_329: string;
    PROPERTY_330: string;
    PROPERTY_332: string;
}