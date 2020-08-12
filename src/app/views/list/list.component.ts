import { Component, OnInit } from "@angular/core";
import { Page } from "../../models/page";
import { RouterExtensions } from "@nativescript/angular/router";
import { NavigationOptions } from "@nativescript/angular/router/ns-location-strategy"; // #A
import { PageService } from "../../services/page.service";
import { ItemEventData } from "@nativescript/core/ui/list-view";

@Component({
  selector: "list",
  templateUrl: "./list.html",
  styleUrls: ["./list.css"]
})

export class ListComponent implements OnInit {
  public pages: Array<Page>;

  constructor(
    private routerExtensions: RouterExtensions, 
    private pageService: PageService) { }

  ngOnInit(): void {
    console.log("ello ")
    this.pages = this.pageService.getPages();
  }

  onAddTap(): void {
    let options: NavigationOptions = { 
      clearHistory: true               
    };                                 
    
    this.routerExtensions.navigate(
      ["detail", this.pages.length],   
      options); 
  }

  onItemTap(args: ItemEventData): void {
    let id = args.index;
        
    this.routerExtensions.navigate(["detail", id]);
  }

}