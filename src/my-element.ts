import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import viteLogo from '/vite.svg';
import litLogo from './assets/lit.svg';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;
  createRenderRoot() {
    return this; // will render the template without shadow DOM
  }
  render() {
    return html`
      <section class="">
      <nav class="grid grid-cols-2 items-center w-full h-[75px] bg-[#222] text-white/90 px-[8%]">

        <div class="flex items-center">
          <a href="https://lit.dev" target="_blank">
          <img class="w-8 mr-2" src=${litLogo} class="" alt="Lit logo" />
          </a>
          <h1 class="text-3xl font-black">Lit App</h1>
        </div>

        <div class="flex justify-end">
         <div class="text-black" x-data="{ open: false }">
         <button class=" text-white"@click="open = ! open"> <i class="fa fa-bars"></i></button>
 
         <div class="   w-[350px] bg-white h-full absolute top-0 right-0 shadow-xl shadow-black/30"
        x-show="open"
        x-transition:enter="transition ease-out duration-800"
        x-transition:enter-start="opacity-0 scale-90"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition ease-out duration-500"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-90"
        >
          <div class=" flex  text-3xl">
        <button class=" text-black"@click="open = ! open">&times;</button>
          </div>
           Hello 👋
          </div>
         </div>
        </div>
      
      </nav>
     
      <section class="pt-12">
      <h1 class="text-7xl text-center font-black text-blue-700">Vite + Lit</h1>
      
        </section>
      </section>
    `;
  }

  private _onClick() {
    this.count++;
  }

  static styles = css`
    
     
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
