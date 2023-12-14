import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fluid-button',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './fluid-button.component.html',
  styleUrl: './fluid-button.component.scss',
})
export class FluidButtonComponent {
  faCircleNotch = faCircleNotch;
  @Input()
  icon: IconDefinition | undefined;
  @Input({ required: true })
  isDoing = false;
  @Input({ required: true })
  label = 'To be replaced';

  @Input()
  disabled = false;
}
