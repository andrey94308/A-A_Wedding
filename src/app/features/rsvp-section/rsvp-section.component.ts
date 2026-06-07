import { Component, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

import { Guest } from '../../core/invite.models';
import { RsvpService } from '../../core/rsvp.service';
import { SectionShellComponent } from '../../shared/section-shell/section-shell.component';

@Component({
  selector: 'app-rsvp-section',
  standalone: true,
  imports: [ReactiveFormsModule, SectionShellComponent],
  templateUrl: './rsvp-section.component.html',
  styleUrl: './rsvp-section.component.css'
})
export class RsvpSectionComponent {
  @Input({ required: true }) guest!: Guest;

  private readonly fb = inject(FormBuilder);
  private readonly rsvpService = inject(RsvpService);

  isSubmitting = false;
  submitState: 'idle' | 'sent' | 'error' = 'idle';

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    attending: ['yes' as 'yes' | 'no' | 'maybe', [Validators.required]],
    message: [''],
  });

  submit(): void {
    if (this.form.invalid || this.isSubmitting) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitState = 'idle';

    this.rsvpService
      .submit({
        guest: this.guest,
        email: this.form.controls.email.value,
        attending: this.form.controls.attending.value,
        message: this.form.controls.message.value,
      })
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe({
        next: () => (this.submitState = 'sent'),
        error: () => (this.submitState = 'error'),
      });
  }

}
