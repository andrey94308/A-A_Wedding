import { Component, Input } from '@angular/core';

import { WeddingContent } from '../../core/invite.models';
import { SectionShellComponent } from '../../shared/section-shell/section-shell.component';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [SectionShellComponent],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.css'
})
export class MenuSectionComponent {
  @Input({ required: true }) content!: WeddingContent;

}
