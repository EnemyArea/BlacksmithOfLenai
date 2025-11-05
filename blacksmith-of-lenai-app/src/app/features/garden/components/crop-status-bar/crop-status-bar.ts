import { Component, Input } from '@angular/core';
import { CropStatus } from '../../../../shared/enums/crop-status';
import { CropStatusBarIcon } from '../crop-status-bar-icon/crop-status-bar-icon';

@Component({
  selector: 'app-crop-status-bar',
  imports: [CropStatusBarIcon],
  templateUrl: './crop-status-bar.html',
  styleUrl: './crop-status-bar.css',
})
export class CropStatusBar {
  protected readonly CropStatus = CropStatus;

  @Input() isIrrigated = false;
  @Input() isFertilized = false;
}
