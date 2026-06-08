import { Component, Input, OnChanges, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

import { EmailService } from '../../core/email.service';
import { Guest } from '../../core/invite.models';
import { SectionShellComponent } from '../../shared/section-shell/section-shell.component';

@Component({
  selector: 'app-updates-section',
  standalone: true,
  imports: [ReactiveFormsModule, SectionShellComponent],
  templateUrl: './updates-section.component.html',
  styleUrl: './updates-section.component.css'
})
export class UpdatesSectionComponent implements OnChanges {
  @Input({ required: true }) guest!: Guest;

  private readonly fb = inject(FormBuilder);
  private readonly emailService = inject(EmailService);

  isEditing = true;
  isSubmitting = false;
  savedEmail = '';
  submitState: 'idle' | 'sent' | 'error' = 'idle';

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  get introText(): string {
    return this.guest.official
      ? 'Мы будем обновлять эту страницу, когда финальные детали будут готовы. Мы очень просим Вас оставить свой e-mail, чтобы мы могли отправить изменения по рассадке, дресс-коду и времени.'
      : 'Мы будем обновлять эту страницу, когда финальные детали будут готовы. Мы очень просим тебя оставить свой e-mail, чтобы мы могли отправить изменения по рассадке, дресс-коду и времени.';
  }

  get savedEmailLabel(): string {
    return this.guest.official ? 'Ваш e-mail сохранен' : 'Твой e-mail сохранен';
  }

  get submitErrorText(): string {
    return this.guest.official ? 'Не удалось сохранить. Попробуйте позже.' : 'Не удалось сохранить. Попробуй позже.';
  }

  get emailError(): string {
    const control = this.form.controls.email;

    if (!control.invalid || !(control.touched || control.dirty)) {
      return '';
    }

    if (control.hasError('required')) {
      return 'Введите e-mail.';
    }

    return 'Некорректный формат e-mail.';
  }

  ngOnChanges(): void {
    this.savedEmail = this.guest.email ?? '';
    this.isEditing = !this.savedEmail;
    this.form.controls.email.setValue(this.savedEmail);
  }

  edit(): void {
    this.isEditing = true;
    this.submitState = 'idle';
    this.form.controls.email.setValue(this.savedEmail);
  }

  submit(): void {
    if (this.form.invalid || this.isSubmitting) {
      this.form.markAllAsTouched();
      return;
    }

    const email = this.form.controls.email.value.trim();

    this.isSubmitting = true;
    this.submitState = 'idle';

    this.emailService
      .saveEmail({
        uuid: this.guest.uuid,
        email,
      })
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe({
        next: () => {
          this.savedEmail = email;
          this.isEditing = false;
          this.submitState = 'sent';
        },
        error: () => (this.submitState = 'error'),
      });
  }

}
