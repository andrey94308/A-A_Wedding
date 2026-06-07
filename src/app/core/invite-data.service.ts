import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';

import { Guest } from './invite.models';
import { GOOGLE_SHEETS_CSV_URL } from './invite-source.config';
import { FALLBACK_GUESTS } from './wedding-content';

@Injectable({
  providedIn: 'root'
})
export class InviteDataService {
  private readonly http = inject(HttpClient);
  private readonly csvUrl = GOOGLE_SHEETS_CSV_URL;
  private readonly guests$ = this.loadGuests().pipe(shareReplay(1));

  findGuest(uuid: string | null): Observable<Guest | undefined> {
    const normalizedUuid = uuid?.trim();

    if (!normalizedUuid) {
      return of(undefined);
    }

    return this.guests$.pipe(
      map((guests) => guests.find((guest) => guest.uuid === normalizedUuid))
    );
  }

  private loadGuests(): Observable<Guest[]> {
    if (!this.csvUrl) {
      return of(FALLBACK_GUESTS);
    }

    return this.http.get(this.csvUrl, { responseType: 'text' }).pipe(
      map((csv) => this.parseCsv(csv)),
      catchError(() => of(FALLBACK_GUESTS))
    );
  }

  private parseCsv(csv: string): Guest[] {
    const rows = csv
      .split(/\r?\n/)
      .map((row) => row.trim())
      .filter(Boolean)
      .map((row) => row.split(',').map((cell) => cell.trim()));

    const [header = [], ...records] = rows;
    const keyIndex = new Map(header.map((key, index) => [key, index]));

    return records
      .map((record) => ({
        uuid: this.cell(record, keyIndex, 'uuid'),
        firstName: this.cell(record, keyIndex, 'firstName'),
        lastName: this.cell(record, keyIndex, 'lastName'),
        email: this.cell(record, keyIndex, 'email'),
        partySize: Number(this.cell(record, keyIndex, 'partySize')) || undefined,
        tableName: this.cell(record, keyIndex, 'tableName'),
        note: this.cell(record, keyIndex, 'note'),
      }))
      .filter((guest) => guest.uuid && guest.firstName);
  }

  private cell(record: string[], keyIndex: Map<string, number>, key: string): string {
    const index = keyIndex.get(key);
    return index === undefined ? '' : record[index] ?? '';
  }
}
