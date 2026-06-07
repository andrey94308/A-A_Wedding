import { Component, Input } from '@angular/core';

import { Guest, WeddingContent } from '../../core/invite.models';
import { SectionShellComponent } from '../../shared/section-shell/section-shell.component';

@Component({
  selector: 'app-updates-section',
  standalone: true,
  imports: [SectionShellComponent],
  templateUrl: './updates-section.component.html',
  styleUrl: './updates-section.component.css'
})
export class UpdatesSectionComponent {
  @Input({ required: true }) guest!: Guest;
  @Input({ required: true }) content!: WeddingContent;

}
