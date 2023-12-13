import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../../../interfaces/article';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, FaIconComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  faCircleNotch = faCircleNotch;
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;
  selectedArticles = new Set<Article>();

  constructor(protected readonly articleService: ArticleService) {}

  async remove() {
    console.log('remove');
    const ids = [...this.selectedArticles].map((a) => a.id);
    await this.articleService.remove(ids);
    await this.articleService.refresh();
    this.selectedArticles.clear();
  }

  select(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }
}
