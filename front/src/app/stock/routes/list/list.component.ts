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

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, FaIconComponent, AsyncBtnComponent],
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
        await sleep(2000);
        await this.articleService.refresh();
      })();
    }
  }

  async refresh() {
    try {
      console.log('refresh');
      this.errorMsg = '';
      await sleep(300);
      await this.articleService.refresh();
      this.selectedArticles.clear();
    } catch (err) {
      console.log('err: ', err);
      this.errorMsg = 'Erreur Technique...🤭';
    }
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
    this.errorMsg = 'Erreur Technique...';
  }
}
