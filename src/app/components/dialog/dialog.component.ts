import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StringLiteralLike } from 'typescript';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  title?: string;
  message?: string;
  closeBtnName?: string;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}
}
