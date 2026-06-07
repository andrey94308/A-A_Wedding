import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Guest, WeddingContent } from '../../core/invite.models';
import { InviteTabsComponent } from '../invite-tabs/invite-tabs.component';

@Component({
  selector: 'app-invite-page-shell',
  standalone: true,
  imports: [RouterLink, InviteTabsComponent],
  templateUrl: './invite-page-shell.component.html',
  styleUrl: './invite-page-shell.component.css',
})
export class InvitePageShellComponent {
  @Input({ required: true }) guest!: Guest;
  @Input({ required: true }) content!: WeddingContent;
}
