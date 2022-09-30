import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-protocol-ineas',
  templateUrl: './protocol-ineas.component.html',
  styleUrls: ['./protocol-ineas.component.scss']
})
export class ProtocolIneasComponent implements OnInit {

  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;
  closeModal: string;
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

}
