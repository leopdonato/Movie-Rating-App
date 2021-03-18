import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, AfterViewInit {

  @ViewChild('modal', { static: false }) modal: any;
  @ViewChild('modalButton', { static: false }) modalButton: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.modal.nativeElement.modal.open();
  }

  showModal() {
    this.modalButton.nativeElement.click();
  }

}
