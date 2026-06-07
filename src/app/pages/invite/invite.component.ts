import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { WEDDING_CONTENT } from '../../core/wedding-content';
import { InviteDataService } from '../../core/invite-data.service';
import { HeroSectionComponent } from '../../features/hero-section/hero-section.component';
import { ProgramSectionComponent } from '../../features/program-section/program-section.component';
import { RsvpSectionComponent } from '../../features/rsvp-section/rsvp-section.component';
import { UpdatesSectionComponent } from '../../features/updates-section/updates-section.component';
import { VenueSectionComponent } from '../../features/venue-section/venue-section.component';

@Component({
  selector: 'app-invite',
  standalone: true,
  imports: [
    AsyncPipe,
    HeroSectionComponent,
    VenueSectionComponent,
    ProgramSectionComponent,
    UpdatesSectionComponent,
    RsvpSectionComponent,
  ],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.css'
})
export class InviteComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly inviteData = inject(InviteDataService);

  readonly content = WEDDING_CONTENT;
  readonly guest$ = this.route.paramMap.pipe(
    map((params) => params.get('uuid')),
    switchMap((uuid) => this.inviteData.findGuest(uuid))
  );

}
