import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EMAIL_SCRIPT_URL } from './invite-source.config';

export interface SaveEmailPayload {
  uuid: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private readonly http = inject(HttpClient);
  private readonly scriptUrl = EMAIL_SCRIPT_URL;

  saveEmail(payload: SaveEmailPayload): Observable<unknown> {
    if (!this.scriptUrl) {
      return of({ skipped: true, payload });
    }

    return this.http.post(
      this.scriptUrl,
      JSON.stringify({
        action: 'saveEmail',
        uuid: payload.uuid,
        email: payload.email,
      }),
      {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      }
    );
  }
}
