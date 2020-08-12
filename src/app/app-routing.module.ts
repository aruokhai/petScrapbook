import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import {HomeComponent} from "./views/home/home.component"
import {AboutComponent} from "./views/about/about.component"

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "list",  loadChildren: "./views/list/list.module#ListModule" },
    { path: "about", component: AboutComponent } ,
    { path: "detail", loadChildren: "./views/detail/detail.module#DetailModule" } 
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
