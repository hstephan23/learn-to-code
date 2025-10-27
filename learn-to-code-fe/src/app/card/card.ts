import { Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() cardTitle: string = 'Card';
  @Input() cardSubtitle: string = 'Subtitle';
  @Input() cardImage: string = '';
  @Input() cardImageAlt: string = '';
  @Input() cardImageWidth: string = '100%';
  @Input() cardImageHeight: string = 'auto';
  @Input() cardColor: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() cardSize: 'sm' | 'md' | 'lg' = 'md';
}
