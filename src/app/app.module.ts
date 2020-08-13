import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {DetailModule} from "./views/detail/detail.module";
import {ListModule} from "./views/list/list.module";
import { HomeComponent } from "./views/home/home.component";
import { AboutComponent } from "./views/about/about.component";
import { PageService } from "./services/page.service";




// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        DetailModule,
        ListModule,
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
   

    providers: [PageService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
