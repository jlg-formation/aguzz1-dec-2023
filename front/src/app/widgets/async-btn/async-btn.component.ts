import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { sleep } from '../../misc';

@Component({
  selector: 'app-async-btn',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './async-btn.component.html',
  styleUrl: './async-btn.component.scss',
})
export class AsyncBtnComponent {
  @Input({ required: true })
  action = async () => {};
  faCircleNotch = faCircleNotch;
  @Input({ required: true })
  icon = faCircleNotch;
  isDoing = false;
  @Input({ required: true })
  label = 'to be replaced';

  async doAction() {
    this.isDoing = true;
    await this.action();
    this.isDoing = false;
  }
}
