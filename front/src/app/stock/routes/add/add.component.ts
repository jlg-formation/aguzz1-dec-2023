import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleNotch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../../../services/article.service';
import { NewArticle } from '../../../interfaces/article';
import { FluidButtonComponent } from '../../../widgets/fluid-button/fluid-button.component';
import { sleep } from '../../../misc';
import { AutofocusDirective } from '../../../widgets/autofocus.directive';
import { CustomValidators } from '../../../validators/custom.validator';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FaIconComponent,
    ReactiveFormsModule,
    JsonPipe,
    FluidButtonComponent,
    AutofocusDirective,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  f = new FormGroup({
    name: new FormControl('Truc', [
      Validators.required,
      Validators.maxLength(15),
    ]),
    price: new FormControl(0.01, [Validators.required, Validators.min(0.01)]),
    qty: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      CustomValidators.integer,
    ]),
  });
  faPlus = faPlus;
  faCircleNotch = faCircleNotch;
  isAdding = false;
  errorMsg = '';

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  async submit() {
    try {
      console.log('submit');
      this.isAdding = true;
      this.errorMsg = '';
      // add the new article
      await sleep(300);
      const newArticle: NewArticle = this.f.value as NewArticle;
      await this.articleService.add(newArticle);
      await this.articleService.refresh();
      // navigate to /stock
      await this.router.navigate(['..'], { relativeTo: this.route });
      console.log('finished');
    } catch (err) {
      console.log('err: ', err);
      this.errorMsg = 'Erreur Technique...';
    } finally {
      this.isAdding = false;
    }
  }
}
