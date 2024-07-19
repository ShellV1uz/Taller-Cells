import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-demo/demo-app-template/demo-app-template.js';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';
import '@bbva-experience-components/bbva-button-default/bbva-button-default';
import '@cells-demo/demo-app-container/demo-app-container.js';

class ExplorePage extends CellsPage {

  static get is() {
    return 'explore-page';
  }

  static get properties() {
    return {
      fullName: { type: String },
      age: { type: Number },
      city: { type: String },
      company: { type: String}
    };
  }
  constructor() {
    super();
    this.fullName = 'Alan Castaño';
    this.age = 18;
    this.city = 'Bogotá';
    this.company = 'Samtel';
  }

  render() {
    return html`
      <demo-app-template data-cells-type="template">
        <div slot="app-main-content">
            <h3>Meet Me</h3>  
            <p>Name: ${this.fullName}</p>
            <p>Age: ${this.age}</p>
            <p>City: ${this.city}</p>
            <p>Company: ${this.company}</p>
            <bbva-button-default active=""  @click=${this.gotoHome}>
                Back To Home
            </bbva-button-default>              
        </div>
      </demo-app-template>`;
  }

  gotoHome() {
    this.navigate('home');
  }

}
window.customElements.define(ExplorePage.is, ExplorePage);