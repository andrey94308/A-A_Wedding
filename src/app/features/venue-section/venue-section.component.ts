import { Component, Input } from '@angular/core';

import { WeddingContent } from '../../core/invite.models';

@Component({
  selector: 'app-venue-section',
  standalone: true,
  imports: [],
  templateUrl: './venue-section.component.html',
  styleUrl: './venue-section.component.css'
})
export class VenueSectionComponent {
  @Input({ required: true }) content!: WeddingContent;

}
