import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { Page } from "../../models/page";
import { RouterExtensions } from "@nativescript/angular/router";           
import { NavigationOptions } from "@nativescript/angular/router/ns-location-strategy";
import { PageService } from "../../services/page.service";
import { ModalDialogService, ModalDialogOptions }  
  from "@nativescript/angular/modal-dialog";        
import { SelectDateComponent } from "../modals/select-date/select-date.component";
import { SelectGenderComponent } from "../modals/select-gender/select-gender.component"; 
import * as camera from "nativescript-camera";
import * as geolocation from "nativescript-geolocation";
import { ImageSource } from "@nativescript/core/image-source";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "detail",
  providers: [ PageService ],
  templateUrl: "./detail.html",
  styleUrls: ["./detail.css"]
})
export class DetailComponent implements OnInit { 
  page: Page;                                 

  constructor(
    private routerExtensions: RouterExtensions, 
    private pageService: PageService,
    private route: ActivatedRoute,
    private modalService: ModalDialogService,              
    private viewContainerRef: ViewContainerRef) { }  

  ngOnInit(): void {                                      
    let id:number;                                        
    id = +this.route.snapshot.params.id;                                                
    this.page = this.pageService.getPage(id);  
    if (this.page === null) {                  
      this.page = <Page>{ Id: id, BirthDate: new Date() };            
    }                                          
  }

  onDoneTap(): void {                          
    this.pageService.savePage(this.page);  

    var options = <NavigationOptions>{
      clearHistory: true
    };
    this.routerExtensions.navigate(["list"], options);
  }

  onBirthDateTap(): void {
    let options: ModalDialogOptions = {          
      context: this.page.BirthDate,              
      fullscreen: true,                          
      viewContainerRef: this.viewContainerRef    
    };                                           

    this.modalService.showModal(SelectDateComponent, options) 
      .then((dialogResult: Date) => {                                      
        this.page.BirthDate = dialogResult;                                         
        let now = Date.now();                                             
        let diff = Math.abs(now - this.page.BirthDate.valueOf()) / 1000 / 31536000; 
        this.page.Age = diff.toFixed(1);                            
      });                                                                 
  }

  onGenderTap(): void {
    let options: ModalDialogOptions = {
      context: this.page.Gender,
      fullscreen: true,
      viewContainerRef: this.viewContainerRef
    };

    this.modalService.showModal(SelectGenderComponent, options) 
      .then((dialogResult: string) => {      
        this.page.Gender = dialogResult;     
      });
  }

   onAddImageTap(): void {
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
        camera.requestPermissions();
        camera.takePicture({ width: 100, height: 100, keepAspectRatio: true })
            .then((picture) => {
                let image = new ImageSource();

                image.fromAsset(picture).then((imageSource) => {
                    this.page.Image = imageSource;
                    this.page.ImageBase64 = this.page.Image.toBase64String("png");
                });

                geolocation.getCurrentLocation(null)
                    .then((location) => {
                        this.page.Lat = location.latitude;
                        this.page.Long = location.longitude;
                    });
            });
    }
}
