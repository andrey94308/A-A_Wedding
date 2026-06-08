import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Guest, WeddingContent } from '../../core/invite.models';
import { SectionShellComponent } from '../../shared/section-shell/section-shell.component';

@Component({
  selector: 'app-program-section',
  standalone: true,
  imports: [RouterLink, SectionShellComponent],
  templateUrl: './program-section.component.html',
  styleUrl: './program-section.component.css'
})
export class ProgramSectionComponent {
  @Input({ required: true }) guest!: Guest;
  @Input({ required: true }) content!: WeddingContent;

  expandedIndexes = new Set<number>();

  get greeting(): string {
    if (this.isEnglish) {
      return 'Dear';
    }

    return this.guest.sex === 'f' ? 'Дорогая' : 'Дорогой';
  }

  get isOfficial(): boolean {
    return !this.isEnglish && this.guest.official === true;
  }

  get isEnglish(): boolean {
    return this.guest.lang === 'en';
  }

  get programEyebrow(): string {
    return this.isEnglish ? 'Program' : 'Программа';
  }

  get ceremonyPresence(): string {
    if (this.isOfficial) {
      return 'Вы были рядом';
    }

    return this.guest.sex === 'f' ? 'ты была рядом' : 'ты был рядом';
  }

  get prologueProgramText(): string {
    if (this.isEnglish) {
      return 'below you will find the program of the evening and get a sense of what our wedding will look like. We tried to make everything as convenient as possible: the whole celebration will take place in Vienna, at Palais Hotel Almanac.';
    }

    return this.isOfficial
      ? 'ниже Вы найдёте программу вечера и сможете представить, как будет выглядеть наша свадьба. Мы постарались сделать всё максимально удобно: весь праздник пройдёт в Вене, в Palais Hotel Almanac.'
      : 'ниже ты найдёшь программу вечера и сможешь представить, как будет выглядеть наша свадьба. Мы постарались сделать всё максимально удобно: весь праздник пройдёт в Вене, в Palais Hotel Almanac.';
  }

  get prologueHostText(): string {
    return this.isEnglish
      ? 'And to help friends meet relatives, relatives meet friends, and awkward silence between toasts not become too awkward, a host will be with us throughout the evening.'
      : 'А чтобы друзья познакомились с родственниками, родственники - с друзьями, а неловкое молчание между тостами не успело стать слишком неловким, на протяжении всего вечера рядом с нами будет ведущий.';
  }

  get allergyText(): string {
    if (this.isEnglish) {
      return 'P.S. If you have any allergies to food or flowers, please let us know in advance. We would really like our dance skills to be the only surprise of the evening.';
    }

    return this.isOfficial
      ? 'P.S. Если у Вас есть аллергия на какие-либо продукты или цветы, пожалуйста, сообщите нам об этом заранее. Нам бы очень хотелось, чтобы единственной неожиданностью вечера были наши танцевальные навыки.'
      : 'P.S. Если у тебя есть аллергия на какие-либо продукты или цветы, пожалуйста, сообщи нам об этом заранее. Нам бы очень хотелось, чтобы единственной неожиданностью вечера были наши танцевальные навыки.';
  }

  get epilogueText(): string {
    return this.isEnglish
      ? 'Behind the beautiful halls, flowers, candles, and all the wedding bustle is a very simple idea: to gather the people we love in one place and live through all the emotions of this day together.'
      : 'За красивыми залами, цветами, свечами и всей свадебной суетой скрывается довольно простая идея - собрать в одном месте людей, которых мы любим и вместе прожить все эмоции этого дня.';
  }

  get seeYouText(): string {
    return this.isEnglish ? 'See you soon!' : 'Ждём встречи!';
  }

  get dressCodeLinkText(): string {
    return this.isEnglish ? 'dress code section' : 'раздел с дресс-кодом';
  }

  get dressCodePromptText(): string {
    return this.isEnglish ? 'In the meantime, we suggest taking a look at the' : 'Ну а пока предлагаем заглянуть в';
  }

  programTitle(index: number): string {
    if (!this.isEnglish) {
      return this.content.program[index]?.title ?? '';
    }

    return [
      'Pouring the prosecco',
      'The ceremony',
      'Please take your seats',
      'Still early, we continue',
    ][index] ?? this.content.program[index]?.title ?? '';
  }

  programDetails(index: number): string {
    if (this.isEnglish) {
      const englishDetails = [
        'It just so happens that our close friends and relatives live in different cities and even different countries. Many of them have known each other for a long time, while some will meet for the first time that evening.\n\nSo before the ceremony, we suggest lowering the level of nerves a little, raising the level of prosecco, and getting to know each other.\n\nCome at the beginning - the celebration will already be in full swing. There will be time to hug, chat, and figure out who is connected to whom.',
        'At exactly 18:00, the most emotional moment of our day will begin.\nAnd it is very important to us that you are there with us.',
        'Once the most emotional moments are behind us, we will gather around the festive table.\n\nA delicious dinner, conversations, toasts, laughter, and of course, games and activities are waiting for us.\n\nShare stories and our funny little mishaps. These are exactly the memories we gathered everyone around one table for.',
        'If it feels like the evening has flown by too quickly, that means everything is going according to plan.\nCocktails, music, and dancing late into the night are still ahead.\n\nWe modestly decided not to test the patience of the Austrians with our musical taste, so we booked the entire club!\n\nSo once night falls and the quiet hours begin, we will simply go a few floors down and continue the evening.',
      ];

      return englishDetails[index] ?? this.content.program[index]?.details ?? '';
    }

    const details = [
      this.isOfficial
        ? 'Так случилось, что наши близкие друзья и родственники живут в разных городах и даже странах. Многие давно знакомы, а некоторые встретятся впервые именно в этот вечер.\n\nПоэтому перед церемонией предлагаем немного сбавить градус волнения, поднять градус проссеко и познакомиться.\n\nПриезжайте к началу - праздник уже вовсю начинается. Будет время обняться, пообщаться и разобраться кто кому кем приходится.'
        : 'Так случилось, что наши близкие друзья и родственники живут в разных городах и даже странах. Многие давно знакомы, а некоторые встретятся впервые именно в этот вечер.\n\nПоэтому перед церемонией предлагаем немного сбавить градус волнения, поднять градус проссеко и познакомиться.\n\nПриезжай к началу - праздник уже вовсю начинается. Будет время обняться, пообщаться и разобраться кто кому кем приходится.',
      `Ровно в 18:00 начнётся самый волнительный момент нашего дня.\nИ нам очень важно, чтобы в этот момент ${this.ceremonyPresence}.`,
      this.isOfficial
        ? 'Когда самые волнительные моменты останутся позади, мы соберёмся за праздничным столом.\n\nНас ждут вкусный ужин, разговоры, тосты, смех и, конечно же, конкурсы.\n\nДелитесь историями и нашими забавными передрягами. Именно ради таких воспоминаний мы и собираем всех за одним столом.'
        : 'Когда самые волнительные моменты останутся позади, мы соберёмся за праздничным столом.\n\nНас ждут вкусный ужин, разговоры, тосты, смех и, конечно же, конкурсы.\n\nДелись историями и нашими забавными передрягами. Именно ради таких воспоминаний мы и собираем всех за одним столом.',
      this.isOfficial
        ? 'Если Вам покажется, что вечер пролетел слишком быстро, значит всё идёт по плану.\nВпереди коктейли, музыка и танцы до поздней ночи.\n\nМы скромно решили не испытывать терпение австрийцев нашим музыкальным вкусом и поэтому сняли весь клуб целиком!\n\nТак что с наступлением ночи и закона о тишине мы просто спустимся на несколько этажей ниже и продолжим вечер.'
        : 'Если тебе покажется, что вечер пролетел слишком быстро, значит всё идёт по плану.\nВпереди коктейли, музыка и танцы до поздней ночи.\n\nМы скромно решили не испытывать терпение австрийцев нашим музыкальным вкусом и поэтому сняли весь клуб целиком!\n\nТак что с наступлением ночи и закона о тишине мы просто спустимся на несколько этажей ниже и продолжим вечер.',
    ];

    return details[index] ?? this.content.program[index]?.details ?? '';
  }

  toggle(index: number): void {
    if (this.expandedIndexes.has(index)) {
      this.expandedIndexes.delete(index);
      return;
    }

    this.expandedIndexes.add(index);
  }

  isExpanded(index: number): boolean {
    return this.expandedIndexes.has(index);
  }
}
