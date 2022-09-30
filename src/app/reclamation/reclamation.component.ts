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
  reclamations=[]
  closeModal: string;
  isAdmin = localStorage.getItem('role')=="admin"
  isGrossiste = localStorage.getItem('role')=="grossiste"
  isPharmacist = localStorage.getItem('role')=="pharmacy"
  @Input() VoteValue
  @Input() searchedMed=''
  selectedMed=''
  constructor(private modalService: NgbModal, private api:ApiService) {}
    
  ngOnInit(): void {
    console.log(this.isAdmin)
    this.api.getReclamation().subscribe(
      {
        next:data=>{
          console.log(data)
          this.reclamations=data.data
          this.VoteValue = data.yes*100/(data.yes+data.no)
        },
        error:error=>{
          console.log(error)
        }
      }
    )
  }
  f(x:any):any{
    return Math.floor(x)
  }
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
  random(id,i):any{
    if(i){
      return id+"yes"
    }
    return id +"no"
  }
  onVote(e,id):void{
    const body={
      "response":e,
      "reclamationId":id
    }
    console.log(body)
    this.api.vote(body).subscribe(
      {
        next:data=>{
          console.log(data)
          this.VoteValue = data.yes*100/(data.yes+data.no)
        },
        error:error=>{
          console.log(error)
        }
      }
    )
  }

  

  



}
