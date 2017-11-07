import { Subscription } from './subscription/subscription';
export interface SharedState {
    wait: number;
    errors: ReadonlyArray<string>;
    subscription: Subscription;
}
