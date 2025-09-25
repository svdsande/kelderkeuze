import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory(AppComponent);

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have the 'frontend' title`, () => {
    expect(spectator.component.title).toEqual('frontend');
  });

  it('should render title', () => {
    spectator.detectChanges();
    const compiled = spectator.element;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, frontend');
  });
});
