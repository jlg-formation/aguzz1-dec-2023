import { Component, OnInit } from '@angular/core';
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
import { AsyncBtnComponent } from '../../../widgets/async-btn/async-btn.component';
import { sleep } from '../../../misc';
import { CurrencyPipe } from '@angular/common';
import { EllipsisPipe } from '../../../widgets/ellipsis.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLink,
    FaIconComponent,
    AsyncBtnComponent,
    CurrencyPipe,
    EllipsisPipe,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  errorMsg = '';
  faCircleNotch = faCircleNotch;
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;
  selectedArticles = new Set<Article>();

  constructor(protected readonly articleService: ArticleService) {}

  ngOnInit(): void {
    if (this.articleService.articles === undefined) {
      (async () => {
        try {
          await sleep(300);
          await this.articleService.refresh();
        } catch (err) {
          console.log('err: ', err);
          this.errorMsg = 'Technical Error...';
        }
      })();
    }
  }

  async refresh() {
    console.log('refresh');
    await sleep(300);
    await this.articleService.refresh();
    this.selectedArticles.clear();
  }

  async remove() {
    console.log('remove');
    await sleep(300);
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

  setError(error: unknown) {
    console.log('error: ', error);
    this.errorMsg = 'Erreur Technique...😫';
  }

  resetError() {
    this.errorMsg = '';
  }
}
