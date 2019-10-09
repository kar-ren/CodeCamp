import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {


  constructor(private closeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  cancel(close: string) {
    console.log(close)
    this.closeModal.close();
  }

  submit(submit: string){
    console.log("submit");
    this.closeModal.close();
  }
}
