import { Component, Input } from '@angular/core';

import { Guest, WeddingContent } from '../../core/invite.models';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  @Input({ required: true }) guest!: Guest;
  @Input({ required: true }) content!: WeddingContent;

  get greeting(): string {
    return this.guest.sex === 'f' ? 'Дорогая' : 'Дорогой';
  }
}
