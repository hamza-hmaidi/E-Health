import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-protocol-ineas',
  templateUrl: './protocol-ineas.component.html',
  styleUrls: ['./protocol-ineas.component.scss']
})
export class ProtocolIneasComponent implements OnInit {
  protocols=['Maladie1','Maladie2','Maladie3','Maladie4','Maladie5']
  closeModal: string;
  @Input() searchedProtocol=''
  @Input() info=''
  selectedProtocol=''
  isSelected=false
  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;
  constructor(private modalService: NgbModal, private api:ApiService) {}

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

  ngOnInit(): void {
    this.api.getReclamation().subscribe(
      data=>{
        console.log(data)
      }
    )
  }

  showProtocol(e:any):void{
    console.log(e.target.value)
    this.selectedProtocol=e.target.value
  }
  isSearched(protocol:string): boolean{
    console.log(protocol)
    console.log(this.selectedProtocol)
    return  this.selectedProtocol!='' &&  protocol.startsWith(this.selectedProtocol) 

  }

  select(protocol:string):void{
    this.selectedProtocol=protocol
    this.isSelected=true
    console.log(this.selectedProtocol)
  }
  addAlert():void{
    const alert={
      "protocol":this.selectedProtocol,
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
