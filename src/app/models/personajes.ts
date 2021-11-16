import { EventList, Url, Image, StoryList } from "./comics";

export class Personaje {
    code: number | undefined;
    status: string | undefined;
    copyright: TemplateStringsArray | undefined;
    attributionText: string | undefined;
    attributionHTML: string | undefined;
    data: CharacterDataContainer | undefined;
    etag: string | undefined;
}
export class CharacterDataContainer {
    offset: number | undefined;
    limit: number | undefined;
    total: number | undefined;
    count: number | undefined;
    results: Array<Character> | undefined;
}
export class Character {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    modified: Date | undefined;
    resourceURI: string | undefined;
    urls: Array<Url> | undefined;
    thumbnail: Image | undefined;
    comics: ComicList | undefined;
    stories: StoryList | undefined;
    events: EventList | undefined;
    series: SeriesList | undefined;
}
export class ComicList {
    available: number | undefined;
    returned: number | undefined;
    collectionURI: string | undefined;
    items: Array<ComicSummary> | undefined;
}
export class ComicSummary {
    resourceURI: string | undefined;
    name: string | undefined;
}
export class SeriesList {
    available: number | undefined;
    returned: number | undefined;
    collectionURI: string | undefined;
    items: Array<SeriesSummary> | undefined;
}
export class SeriesSummary {
    resourceURI: string | undefined;
    name: string | undefined;
}