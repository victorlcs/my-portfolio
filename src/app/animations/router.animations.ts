import {trigger, stagger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter .row.work', style({ opacity: 0 })
      , { optional: true }),
    query(':enter h1', style({ opacity: 0 })
      , { optional: true }),
    query(':enter .profile-pic', style({ opacity: 0 })
      , { optional: true }),
    query(':enter .page-desc', style({ opacity: 0 })
      , { optional: true }),
    query(':enter .card', style({ opacity: 0 })
      , { optional: true }),
    query(':enter .profile-pic', stagger(400, [
        style({ transform: 'translateY(100px)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0px)', opacity: 1 })),
      ]), { optional: true }),
    query(':enter h1', stagger(400, [
      style({ transform: 'translateY(100px)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(0px)', opacity: 1 })),
    ]), { optional: true }),
    query(':enter .page-desc', stagger(400, [
      style({ transform: 'translateY(100px)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(0px)', opacity: 1 })),
    ]), { optional: true }),
    query(':enter .row.work', stagger(400, [
      style({ transform: 'translateX(1000px)' }),
      animate('1s ease-in-out', style({ transform: 'translateX(0px)', opacity: 1 })),
    ]), { optional: true }),
    query(':enter .card', stagger(400, [
      style({ transform: 'translateY(100px)' }),
      animate('0.3s', style({ transform: 'translateY(-50px)', opacity: 1 })),
      animate('0.7s ease-in-out', style({ transform: 'translateY(0px)', opacity: 1 })),
    ]), { optional: true }),
  ])
]);
