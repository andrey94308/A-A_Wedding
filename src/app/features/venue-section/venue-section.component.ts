import { Component, Input } from '@angular/core';

import { WeddingContent } from '../../core/invite.models';
import { SectionShellComponent } from '../../shared/section-shell/section-shell.component';

@Component({
  selector: 'app-venue-section',
  standalone: true,
  imports: [SectionShellComponent],
  templateUrl: './venue-section.component.html',
  styleUrl: './venue-section.component.css'
})
export class VenueSectionComponent {
  @Input({ required: true }) content!: WeddingContent;

}
