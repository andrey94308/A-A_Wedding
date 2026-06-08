import { AfterViewInit, Component, ElementRef, Input, OnDestroy, inject } from '@angular/core';

import { Guest, WeddingContent } from '../../core/invite.models';
import { InviteTabsComponent } from '../../shared/invite-tabs/invite-tabs.component';

const AUTO_SCROLL_DELAY = 4000;

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [InviteTabsComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) guest!: Guest;
  @Input({ required: true }) content!: WeddingContent;

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private autoScrollTimer: ReturnType<typeof setTimeout> | undefined;

  get greeting(): string {
    if (this.isEnglish) {
      return 'Dear';
    }

    return this.guest.sex === 'f' ? 'Дорогая' : 'Дорогой';
  }

  get inviteAddress(): string {
    return this.isEnglish ? 'you' : this.guest.official ? 'Вас' : 'тебя';
  }

  get invitationText(): string {
    return this.isEnglish
      ? `${this.greeting} ${this.guest.firstName}, we would love for ${this.inviteAddress} to share this day with us!`
      : `${this.greeting} ${this.guest.firstName}, приглашаем ${this.inviteAddress} разделить этот день вместе с нами!`;
  }

  get isEnglish(): boolean {
    return this.guest.lang === 'en';
  }

  ngAfterViewInit(): void {
    this.autoScrollTimer = setTimeout(() => {
      const host = this.elementRef.nativeElement;

      if (host.scrollTop > 20) {
        return;
      }

      host.scrollTo({
        top: host.clientHeight,
        behavior: 'smooth',
      });
    }, AUTO_SCROLL_DELAY);
  }

  ngOnDestroy(): void {
    if (this.autoScrollTimer) {
      clearTimeout(this.autoScrollTimer);
    }
  }
}
