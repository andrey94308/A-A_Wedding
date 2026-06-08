import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, startWith, switchMap } from 'rxjs';

import { InviteDataService } from '../../core/invite-data.service';
import { Guest } from '../../core/invite.models';
import { WEDDING_CONTENT } from '../../core/wedding-content';
import { InvitePageShellComponent } from '../../shared/invite-page-shell/invite-page-shell.component';

@Component({
  selector: 'app-dress-code-page',
  standalone: true,
  imports: [AsyncPipe, InvitePageShellComponent],
  templateUrl: './dress-code-page.component.html',
  styleUrl: './dress-code-page.component.css',
})
export class DressCodePageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly inviteData = inject(InviteDataService);

  readonly content = WEDDING_CONTENT;
  readonly viewModel$ = this.route.paramMap.pipe(
    map((params) => params.get('uuid')),
    switchMap((uuid) =>
      this.inviteData.findGuest(uuid).pipe(
        map((guest) => ({ isLoading: false, guest })),
        startWith({ isLoading: true, guest: undefined as Guest | undefined })
      )
    )
  );

  dressCodeIntro(guest: Guest): string {
    if (this.isEnglish(guest)) {
      return 'It would mean a lot to us if your outfit supports the atmosphere of the evening by choosing darker shades.';
    }

    return guest.official
      ? 'Нам будет особенно приятно, если в своём образе Вы поддержите атмосферу вечера, выбрав наряд в тёмных оттенках.'
      : 'Нам будет особенно приятно, если в своём образе ты поддержишь атмосферу вечера, выбрав наряд в тёмных оттенках.';
  }

  isEnglish(guest: Guest): boolean {
    return guest.lang === 'en';
  }
}
