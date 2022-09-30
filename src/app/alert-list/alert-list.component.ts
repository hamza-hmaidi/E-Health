import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  medicaments=['panadole','Maxilaz','Efferalgant','Test','paracetamol','antibiotique','allergica','Efkment','maurice']
  closeModal: string;
  @Input() searchedMed=''
  @Input() info=''
  selectedMed=''
  isSelected=false

  constructor(private modalService: NgbModal, private api:ApiService) { }

  ngOnInit(): void {
  }
  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }   
  showMed(e:any):void{
    console.log(e.target.value)
    this.searchedMed=e.target.value
  }
  isSearched(med:string): boolean{

    return  this.searchedMed!='' &&  med.startsWith(this.searchedMed) 

  }

  select(med:string):void{
    this.selectedMed=med
    this.isSelected=true
    console.log(this.selectedMed)
  }
  addAlert():void{
    const alert={
      "drug":this.selectedMed,
      "description":this.info
    }
    this.api.postAlert(alert).subscribe(
      {
        next: data => {
          console.log( data + " alerte ajoutée")
        }, 
        error: error=>{
          console.log(error)
        }
      }
    )
  }

}
