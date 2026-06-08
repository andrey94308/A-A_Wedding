import { Component, Input } from '@angular/core';

import { Guest, WeddingContent } from '../../core/invite.models';
import { InviteTabsComponent } from '../../shared/invite-tabs/invite-tabs.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [InviteTabsComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  @Input({ required: true }) guest!: Guest;
  @Input({ required: true }) content!: WeddingContent;

  get greeting(): string {
    return this.guest.sex === 'f' ? 'Дорогая' : 'Дорогой';
  }

  get togetherAddress(): string {
    return this.guest.official ? 'Вами' : 'тобой';
  }
}
