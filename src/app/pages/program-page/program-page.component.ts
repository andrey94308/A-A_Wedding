import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, startWith, switchMap } from 'rxjs';

import { InviteDataService } from '../../core/invite-data.service';
import { Guest } from '../../core/invite.models';
import { WEDDING_CONTENT } from '../../core/wedding-content';
import { ProgramSectionComponent } from '../../features/program-section/program-section.component';
import { InvitePageShellComponent } from '../../shared/invite-page-shell/invite-page-shell.component';

@Component({
  selector: 'app-program-page',
  standalone: true,
  imports: [AsyncPipe, InvitePageShellComponent, ProgramSectionComponent],
  templateUrl: './program-page.component.html',
  styleUrl: './program-page.component.css',
})
export class ProgramPageComponent {
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
}
