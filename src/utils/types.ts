// surah------------------------

export interface Surah {
    _id: string;

    index: string;
    name: string;

    verse: Record<string, string>;

    count: number;

    juz: {
        index: string;
        _id: string;
        verse: {
            start: string;
            end: string;
        };
    }[];

    createdAt?: string;
    updatedAt?: string;
}

export interface SurahResponse {
    success: boolean;
    data: Surah;
}

export interface AllSurahResponse {
    success: boolean;
    count: number;
    data: Surah[];
}

// translation------------------------
export interface Translation {
    _id: string;
    name: string;
    index: string;

    verse: Record<string, string>;

    count: number;

    createdAt?: string;
    updatedAt?: string;
}

export interface TranslationResponse {
    success: boolean;
    data: Translation;
}

export interface AllTranslationResponse {
    success: boolean;
    count: number;
    data: Translation[];
}

//surah names------------------------
export interface SurahName {
    _id: string;

    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: "Meccan" | "Medinan";

    createdAt?: string;
    updatedAt?: string;
}

export interface AllSurahNameResponse {
    success: boolean;
    count: number;
    data: SurahName[];
}
