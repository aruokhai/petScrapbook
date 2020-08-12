import { ImageSource } from "@nativescript/core/image-source"; 

export class Page { 
    Id: number;
    Title ?: string;
    Age ?: string;
    BirthDate: Date; 
    Gender ?: string; 
    Lat ?: number; 
    Long ?: number; 
    Image ?: ImageSource;
    ImageBase64 ?: string;
}