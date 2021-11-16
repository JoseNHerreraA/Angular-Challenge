export class Comics {
    code: number | undefined;
    status: string | undefined;
    copyright: TemplateStringsArray | undefined;
    attributionText: string | undefined;
    attributionHTML: string | undefined;
    data: ComicDataContainer | undefined;
    etag: string | undefined;
}
export class ComicDataContainer {
    offset: number | undefined;
    limit: number | undefined;
    total: number | undefined;
    count: number | undefined;
    results: Array<Comic> | undefined;
}
export class Comic {
    id: number | undefined;
    digitalId: number | undefined;
    title: string | undefined;
    issueNumber: number | undefined;
    variantDescription: string | undefined;
    description: string | undefined;
    modified: Date | undefined;
    isbn: string | undefined;
    upc: string | undefined;
    diamondCode: string | undefined;
    ean: string | undefined;
    issn: string | undefined;
    format: string | undefined;
    pageCount: number | undefined;
    textObjects: Array<TextObject> | undefined;
    resourceURI: string | undefined;
    urls: Array<Url> | undefined;
    series: SeriesSummary | undefined;
    variants: Array<ComicSummary> | undefined;
    collections: Array<ComicSummary> | undefined;
    collectedIssues: Array<ComicSummary> | undefined;
    dates: Array<ComicDate> | undefined;
    prices: Array<ComicPrice> | undefined;
    thumbnail: Image | undefined;
    images: Array<Image> | undefined;
    creators: CreatorList | undefined;
    characters: CharacterList | undefined;
    stories: StoryList | undefined;
    events: EventList | undefined;
}
export class TextObject {
    type: string | undefined;
    language: string | undefined;
    text: string | undefined;
}
export class Url {
    type: string | undefined;
    url: string | undefined;
}
export class SeriesSummary {
    resourceURI: string | undefined;
    name: string | undefined;
}
export class ComicSummary {
    resourceURI: string | undefined;
    name: string | undefined;
}
export class ComicDate {
    type: string | undefined;
    date: Date | undefined;
}
export class ComicPrice {
    type: string | undefined;
    price: number | undefined;
}
export class Image {
    path: string | undefined;
    extension: string | undefined;
}
export class CreatorList {
    available: number | undefined;
    returned: number | undefined;
    collectionURI: string | undefined;
    items: Array<CreatorSummary> | undefined;
}
export class CreatorSummary {
    resourceURI: string | undefined;
    name: string | undefined;
    role: string | undefined;
}
export class CharacterList {
    available: number | undefined;
    returned: number | undefined;
    collectionURI: string | undefined;
    items: Array<CharacterSummary> | undefined;
}
export class CharacterSummary {
    resourceURI: string | undefined;
    name: string | undefined;
    role: string | undefined;
}
export class StoryList {
    available: number | undefined;
    returned: number | undefined;
    collectionURI: string | undefined;
    items: Array<StorySummary> | undefined;
}
export class StorySummary {
    resourceURI: string | undefined;
    name: string | undefined;
    type: string | undefined;
}
export class EventList {
    available: number | undefined;
    returned: number | undefined;
    collectionURI: string | undefined;
    items: Array<EventSummary> | undefined;
}
export class EventSummary {
    resourceURI: string | undefined;
    name: string | undefined;
}