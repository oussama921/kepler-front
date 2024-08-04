import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),  // Start at opacity 0
    animate(300)            // Fade in to opacity 1
  ]),
  transition(':leave', [
    animate(300, style({ opacity: 0 }))  // Fade out to opacity 0
  ])
]);
