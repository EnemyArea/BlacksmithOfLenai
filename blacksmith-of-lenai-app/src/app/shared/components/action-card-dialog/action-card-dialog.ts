import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-action-card-dialog',
  imports: [],
  templateUrl: './action-card-dialog.html',
  styleUrl: './action-card-dialog.css',
  host: {
    class: 'card soft-gradient text-neutral-content w-96',
  },
})
export class ActionCardDialog {
  @Input() figure = '';
  @Input() dialogText = '';
  @Input() secondaryBtnLabel = '';
  @Input() primaryBtnLabel = '';

  @ViewChild('baseDialog') baseDialog!: ElementRef<HTMLDialogElement>;

  public showDialog(): void {
    this.baseDialog.nativeElement.showModal();
  }
}
