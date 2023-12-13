import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleNotch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../../../services/article.service';
import { NewArticle } from '../../../interfaces/article';

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
  faCircleNotch = faCircleNotch;
  isAdding = false;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  async submit() {
    console.log('submit');
    this.isAdding = true;
    // add the new article
    const newArticle: NewArticle = this.f.value as NewArticle;
    await this.articleService.add(newArticle);
    await this.articleService.refresh();
    // navigate to /stock
    await this.router.navigate(['..'], { relativeTo: this.route });
    console.log('finished');
    this.isAdding = false;
  }
}
