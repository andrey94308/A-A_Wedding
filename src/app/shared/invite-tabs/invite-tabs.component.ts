import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-invite-tabs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './invite-tabs.component.html',
  styleUrl: './invite-tabs.component.css',
})
export class InviteTabsComponent {
  @Input({ required: true }) uuid!: string;
  @Input() variant: 'dark' | 'light' | 'landing' = 'dark';

  private readonly router = inject(Router);

  get links(): Array<{ label: string; commands: string[]; path: string }> {
    const allLinks = [
      {
        label: 'Главная',
        commands: ['/invite', this.uuid],
        path: `/invite/${this.uuid}`,
      },
      {
        label: 'Программа',
        commands: ['/invite', this.uuid, 'program'],
        path: `/invite/${this.uuid}/program`,
      },
      {
        label: 'Дресс-код',
        commands: ['/invite', this.uuid, 'dress-code'],
        path: `/invite/${this.uuid}/dress-code`,
      },
    ];

    const currentPath = this.router.url.split('?')[0].split('#')[0];
    return allLinks.filter((link) => link.path !== currentPath);
  }

  get navClass(): string {
    return this.variant === 'landing'
      ? 'flex flex-col items-center gap-4 text-center'
      : 'flex flex-wrap items-center gap-x-7 gap-y-3';
  }

  get linkClass(): string {
    if (this.variant === 'landing') {
      return 'focus-ring border-b border-almanac-cocoa/70 pb-1 text-lg font-semibold uppercase tracking-[0.22em] text-almanac-cocoa [text-shadow:_0_1px_12px_rgb(255_249_240_/_0.85)] transition hover:border-almanac-ink hover:text-almanac-ink';
    }

    return this.variant === 'dark'
      ? 'focus-ring border-b border-almanac-silver pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-almanac-silver transition hover:border-almanac-gold hover:text-almanac-champagne'
      : 'focus-ring border-b border-almanac-silver pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-almanac-silver transition hover:border-almanac-cocoa hover:text-almanac-cocoa';
  }
}
