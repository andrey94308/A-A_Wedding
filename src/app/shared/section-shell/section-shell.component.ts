import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-shell',
  standalone: true,
  imports: [],
  templateUrl: './section-shell.component.html',
  styleUrl: './section-shell.component.css'
})
export class SectionShellComponent {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() intro = '';

}
