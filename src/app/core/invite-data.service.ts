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
    sex?: 'f' | 'm';
    official?: boolean | number | string;
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
      map((response) => this.mapGuestResponse(response, normalizedUuid)),
      catchError(() => of(this.findFallbackGuest(normalizedUuid)))
    );
  }

  private mapGuestResponse(response: GuestApiResponse, uuid: string): Guest | undefined {
    if (!response.ok || !response.found || !response.guest) {
      return this.findFallbackGuest(uuid);
    }

    return {
      uuid: response.guest.uuid,
      firstName: response.guest.name,
      sex: response.guest.sex,
      official: this.normalizeOfficial(response.guest.official),
      email: response.guest.email,
    };
  }

  private normalizeOfficial(value: boolean | number | string | undefined): boolean {
    return value === true || value === 1 || value === '1';
  }

  private findFallbackGuest(uuid: string): Guest | undefined {
    return FALLBACK_GUESTS.find((guest) => guest.uuid === uuid);
  }
}
