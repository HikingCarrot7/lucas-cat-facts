import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { ErrorMessageComponent } from '../../shared/components/error-message/error-message.component';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { loadFact } from '../../store/cat.actions';
import {
  selectError,
  selectFact,
  selectImageUrl,
  selectLoading,
} from '../../store/cat.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ErrorMessageComponent, SpinnerComponent],
})
export class HomeComponent {
  fact: Signal<string | null>;
  imageUrl: Signal<string | null>;
  loading: Signal<boolean>;
  error: Signal<string | null>;

  constructor(private store: Store) {
    this.store.dispatch(loadFact());
    this.fact = toSignal(this.store.select(selectFact), { initialValue: null });
    this.imageUrl = toSignal(this.store.select(selectImageUrl), {
      initialValue: null,
    });
    this.loading = toSignal(this.store.select(selectLoading), {
      initialValue: false,
    });
    this.error = toSignal(this.store.select(selectError), {
      initialValue: null,
    });
  }

  refresh() {
    this.store.dispatch(loadFact());
  }
}
