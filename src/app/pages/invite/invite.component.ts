import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, startWith, switchMap } from 'rxjs';

import { WEDDING_CONTENT } from '../../core/wedding-content';
import { InviteDataService } from '../../core/invite-data.service';
import { Guest } from '../../core/invite.models';
import { HeroSectionComponent } from '../../features/hero-section/hero-section.component';
import { ProgramSectionComponent } from '../../features/program-section/program-section.component';
import { UpdatesSectionComponent } from '../../features/updates-section/updates-section.component';

@Component({
  selector: 'app-invite',
  standalone: true,
  imports: [
    AsyncPipe,
    HeroSectionComponent,
    ProgramSectionComponent,
    UpdatesSectionComponent,
  ],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.css'
})
export class InviteComponent {
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
