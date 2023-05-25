import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setValuesToComponent(this.id);
  }

  getId(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
  }

  setValuesToComponent(id: string | null): void {
    const article = dataFake.find((article) => article.id === id);

    if (!article) {
      return;
    }

    this.contentTitle = article.title;
    this.contentDescription = article.description;
    this.photoCover = article.photoCover;
  }
}
