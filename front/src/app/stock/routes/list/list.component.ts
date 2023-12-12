import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Articles } from '../../../interfaces/article';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, FaIconComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;
  faCircleNotch = faCircleNotch;

  articles: Articles = [
    { id: 'a1', name: 'Marteau', price: 2.99, qty: 123 },
    { id: 'a2', name: 'Pelle', price: 5.5, qty: 7 },
  ];
}
