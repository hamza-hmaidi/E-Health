import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  medicaments=['panadole','Maxilaz','Efferalgant','Test','paracetamol','antibiotique','allergica','Efkment','maurice']
  closeModal: string;
  @Input() searchedMed=''
  selectedMed=''
  constructor(private modalService: NgbModal, private api:ApiService) {}
    
  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
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
    console.log(this.selectedMed)
  }

  saveReclamation(med:string):void{
    this.api.postReclamation(med).subscribe(
      {
        next: data => {
          console.log( data + " reclamation ajouté")
        }, 
        error: error=>{
          console.log(error)
        }
      }
      );
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
  ngOnInit(): void {
    this.api.getReclamation().subscribe(
      data=>{
        console.log(data)
      }
    )
  }

  



}
