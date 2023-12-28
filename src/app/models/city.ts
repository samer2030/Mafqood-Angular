import { Governorate } from "./governorate";

export interface City {
    id: number;
    nameAr: string;
    nameEn: string;
    governorate: Governorate;
}