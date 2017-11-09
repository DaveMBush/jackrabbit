import {
    trigger,
    animate,
    style,
    group,
    query,
    transition,
    AnimationTriggerMetadata
} from '@angular/animations';

export const routerTransition: AnimationTriggerMetadata = trigger('routerTransition', [
    transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
            , { optional: true }),
    /* 2 */ group([  // block executes in parallel
            query(':enter', [
                style({ opacity: 0 }),
                animate('0.5s ease-in-out', style({ opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ opacity: 1 }),
                animate('.05s ease-in-out', style({ opacity: 0 }))
            ], { optional: true }),
        ])
    ])
])
