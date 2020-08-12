import { Component } from "@angular/core";
import { ModalDialogParams } from "@nativescript/angular/modal-dialog"; 

@Component({
  selector: "select-date",
  templateUrl: "./select-date.html",
  styleUrls: ["./select-date.css"]
})
export class SelectDateComponent {
  date: Date;

  constructor(private params: ModalDialogParams) { 
    this.date = params.context;                    
  }                                                

  onDoneTap(): any { 
    this.params.closeCallback(this.date); 
  }                         
}
