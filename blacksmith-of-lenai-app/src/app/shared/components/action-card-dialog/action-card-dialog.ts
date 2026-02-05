import { Component, ElementRef, input, ViewChild } from '@angular/core';

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
  public readonly figure = input<string>();
  public readonly dialogText = input.required<string>();
  public readonly secondaryBtnLabel = input<string>();
  public readonly primaryBtnLabel = input<string>();

  @ViewChild('baseDialog') protected baseDialog!: ElementRef<HTMLDialogElement>;

  public showDialog(): void {
    this.baseDialog.nativeElement.showModal();
  }
}
