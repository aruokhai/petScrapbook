import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptCommonModule } from "@nativescript/angular";
import { DetailRouting } from "./detail.routing";
import { NativeScriptFormsModule } from "@nativescript/angular/forms";
import { DetailComponent } from "./detail.component";
import { SelectDateComponent } from "../modals/select-date/select-date.component";
import { SelectGenderComponent } from "../modals/select-gender/select-gender.component";




// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [

    ],
    imports: [
        DetailRouting,
       NativeScriptFormsModule,
       NativeScriptCommonModule
    ],
    declarations: [
        DetailComponent,SelectDateComponent, SelectGenderComponent
    ],
    entryComponents: [SelectDateComponent, SelectGenderComponent],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class DetailModule { }
