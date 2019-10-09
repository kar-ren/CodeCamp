import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.scss']
})
export class DeleteuserComponent implements OnInit {

  constructor(
    private router: Router,
    private cancelModal: NgbActiveModal
    ) { }

  ngOnInit() {
  }

  dismiss(close: string){
    console.log(close);
    this.cancelModal.close();
  }


  done(done: string){
    console.log(done);
    this.cancelModal.close();
  }
}
