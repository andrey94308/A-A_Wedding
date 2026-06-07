import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { Guest } from './invite.models';
import { GUEST_API_URL } from './invite-source.config';
import { FALLBACK_GUESTS } from './wedding-content';

interface GuestApiResponse {
  ok: boolean;
  found?: boolean;
  guest?: {
    uuid: string;
    name: string;
    scnd_name: string;
    sex?: 'f' | 'm';
    email?: string;
  };
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InviteDataService {
  private readonly http = inject(HttpClient);
  private readonly guestApiUrl = GUEST_API_URL;

  findGuest(uuid: string | null): Observable<Guest | undefined> {
    const normalizedUuid = uuid?.trim();

    if (!normalizedUuid) {
      return of(undefined);
    }

    if (!this.guestApiUrl) {
      return of(this.findFallbackGuest(normalizedUuid));
    }

    const url = `${this.guestApiUrl}?uuid=${encodeURIComponent(normalizedUuid)}`;

    return this.http.get<GuestApiResponse>(url).pipe(
      map((response) => this.mapGuestResponse(response)),
      catchError(() => of(this.findFallbackGuest(normalizedUuid)))
    );
  }

  private mapGuestResponse(response: GuestApiResponse): Guest | undefined {
    if (!response.ok || !response.found || !response.guest) {
      return undefined;
    }

    return {
      uuid: response.guest.uuid,
      firstName: response.guest.name,
      lastName: response.guest.scnd_name,
      sex: response.guest.sex,
      email: response.guest.email,
    };
  }

  private findFallbackGuest(uuid: string): Guest | undefined {
    return FALLBACK_GUESTS.find((guest) => guest.uuid === uuid);
  }
}
