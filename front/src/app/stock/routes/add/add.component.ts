import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FaIconComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  f = new FormGroup({
    name: new FormControl('Truc'),
    price: new FormControl(0),
    qty: new FormControl(1),
  });
  faPlus = faPlus;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  submit() {
    console.log('submit');
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
