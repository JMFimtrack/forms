import {ChangeDetectionStrategy, Component, signal, inject, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { DataFormService } from "../../services/data-form.service";

@Component({
  selector: 'input-clean',
  templateUrl: './input-clean.component.html',
  styleUrl: './input-clean.component.scss',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCleanComponent {
}
