import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

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

  @Output()
  throwError = new EventEmitter<unknown>();
  @Output()
  startAction = new EventEmitter<void>();

  async doAction() {
    try {
      this.isDoing = true;
      this.startAction.emit();
      await this.action();
    } catch (err) {
      console.log('err: ', err);
      this.throwError.emit(err);
    } finally {
      this.isDoing = false;
    }
  }
}
