import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

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
  icon = faCircleNotch;
  @Input()
  isDoing = false;
  @Input()
  label = 'To be replaced';
}
