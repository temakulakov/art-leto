import axios from "axios";
import {IApiEvent, IEvent} from "../types";
import dayjs from "dayjs";

const api = axios.create({
    baseURL: 'https://intranet.gctm.ru/rest/1/oq4xmye1nkr26lci/'
});

const transformEvents = (events: IApiEvent[]): IEvent[] => {
    return events.map(event => ({
        id: 0,
        title: event.NAME,
        dateTime: dayjs(Object.values(event.PROPERTY_328)[0]),
        duration: Number(Object.values(event.PROPERTY_329)[0]),
        rating: Number(Object.values(event.PROPERTY_330)[0]),
        imageLink: Object.values(event.PROPERTY_332)[0],
        eventLink: Object.values(event.PROPERTY_327)[0],
        ticketLink: Object.values(event.PROPERTY_326)[0],
    }))
}

export const getList = async (): Promise<IEvent[]> => {
    const response = await api.post<{ result : IApiEvent[]}>('lists.element.get', {
        IBLOCK_TYPE_ID: 'lists',
        IBLOCK_ID: '79'
    });
    return transformEvents(response.data.result);
};
