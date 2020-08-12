import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {ListRouting} from "./list.routing"
import { ListComponent } from "./list.component";
import { NativeScriptCommonModule } from "@nativescript/angular";




// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
    ],
    imports: [
        ListRouting,
        NativeScriptCommonModule,
        
    ],
    declarations: [
        ListComponent,
    
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ListModule { }
