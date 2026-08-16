if (!customElements.get('signal-bar')) {
  customElements.define(
    'signal-bar',
    class SignalBar extends HTMLElement {
      connectedCallback() {
        this.storageKey = `signal-bar-dismissed-${this.dataset.id}`;

        if (this.dataset.dismissible === 'true' && window.localStorage.getItem(this.storageKey)) {
          this.remove();
          return;
        }

        this.closeButton = this.querySelector('[data-signal-bar-close]');
        this.closeButton?.addEventListener('click', this.dismiss.bind(this));
      }

      dismiss() {
        window.localStorage.setItem(this.storageKey, 'true');
        this.remove();
      }
    }
  );
}
