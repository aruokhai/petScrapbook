import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular/router"; 

@Component({
  selector: "home",
  templateUrl: "./home.html",
  styleUrls: ["./home.css"]
})
export class HomeComponent {
  constructor(private routerExtensions: RouterExtensions) { 
  }

  onContinueTap(): void {
    this.routerExtensions.navigate(["list"]); 
  }

  onAboutTap(): void {
    this.routerExtensions.navigate(["about"]); 
  }
}
