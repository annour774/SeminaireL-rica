import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article-model';

@Component({
  selector: 'app-article-liste',
  standalone: true,
  imports: [],
  templateUrl: './article-liste.component.html',
  styleUrl: './article-liste.component.scss'
})
export class ArticleListeComponent implements OnInit{
  @Input() article!: Article;
  liker!: boolean;
  textButton!: string;

  ngOnInit(): void {
    this.liker = true;
    this.textButton = "J'aime";
  }

  like(){
    if(this.liker){
      this.textButton = "Je n'aime pas";
      this.liker = false;
    } else{
      this.textButton = "J'aime";
      this.liker = true;
    }
  }
}
