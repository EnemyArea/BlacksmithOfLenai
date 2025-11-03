import { Component, Input } from '@angular/core';
import { CropStatus } from '../../../../shared/enums/crop-status';

@Component({
  selector: 'app-crop-status-bar-icon',
  imports: [],
  templateUrl: './crop-status-bar-icon.html',
  styleUrl: './crop-status-bar-icon.css',
})
export class CropStatusBarIcon {
  @Input() cropStatus = CropStatus.Unknown;
  @Input() isNeeded = false;

  getCropStatusIcon = (): string => {
    switch (this.cropStatus) {
      case CropStatus.Water:
        return '💧';
      case CropStatus.Fertilizer:
        return '⌛';
    }
    return '';
  };
}
