import { EyeColor } from "../enums/eye-color.enum";
import { Gender } from "../enums/gender.enum";
import { HairColor } from "../enums/hair-color.enum";
import { HairType } from "../enums/hair-type.enum";
import { HeightLevel } from "../enums/height-level.enum";
import { SkinTone } from "../enums/skin-tone.enum";
import { WeightLevel } from "../enums/weight-level.enum";
import { Attachment } from "./attachment";
import { City } from "./city";


export interface IReport {
    id: string;
    name?: string;
    gender: Gender;
    skinTone: SkinTone;
    hairType: HairType;
    facialHair: boolean;
    hairColor: HairColor;
    eyeColor: EyeColor;
    heightLevel: HeightLevel;
    weightLevel: WeightLevel;
    minAge?: number;
    maxAge?: number;
    street?: string;
    district?: string;
    dateTime: string;
    contactNumber: string;
    additionalInfo?: string;
    valid: boolean;
    missing: boolean;
    attachments: Attachment[];
    city: City;
}
