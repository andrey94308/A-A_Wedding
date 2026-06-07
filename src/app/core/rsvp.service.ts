import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Guest } from './invite.models';
import { RSVP_SCRIPT_URL } from './invite-source.config';

export interface RsvpPayload {
  guest: Guest;
  email: string;
  attending: 'yes' | 'no' | 'maybe';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  private readonly http = inject(HttpClient);
  private readonly scriptUrl = RSVP_SCRIPT_URL;

  submit(payload: RsvpPayload): Observable<unknown> {
    if (!this.scriptUrl) {
      return of({ skipped: true, payload });
    }

    return this.http.post(this.scriptUrl, payload);
  }
}
