import { Component, Input } from '@angular/core';

import { WeddingContent } from '../../core/invite.models';
import { SectionShellComponent } from '../../shared/section-shell/section-shell.component';

@Component({
  selector: 'app-program-section',
  standalone: true,
  imports: [SectionShellComponent],
  templateUrl: './program-section.component.html',
  styleUrl: './program-section.component.css'
})
export class ProgramSectionComponent {
  @Input({ required: true }) content!: WeddingContent;

}
