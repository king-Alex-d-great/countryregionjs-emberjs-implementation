import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';
import CountryRegion from 'countryregionjs';

export default class FormComponent extends Component {
  @tracked countries = [];
  @tracked states = [];
  @tracked lgas = [];
  @tracked country = '';
  @tracked state = '';
  @tracked lga = '';

  constructor() {
    super(...arguments);

    this.getCountries.perform();
  }

  @action
  handleCountryChange(event) {
    this.country = event.target.value;
    this.getStates.perform(this.country);
  }

  @action
  handleStateChange(event) {
    this.state = event.target.value;
    this.getLgas.perform(this.country, this.state);
  }

  @action
  handleLgaChange(event) {
    this.lga = event.target.value;
  }

  getCountries = task(async () => {
    this.countries = await this.getCountryRegionInstance().getCountries();
  });

  getStates = task(async (country) => {
    this.states = await this.getCountryRegionInstance().getStates(country);
  });

  getLgas = task(async (country, state) => {
    this.lgas = await this.getCountryRegionInstance().getLGAs(country, state);
  });

  getCountryRegionInstance() {
    return (this.countryRegionInstance ??= new CountryRegion());
  }
}
