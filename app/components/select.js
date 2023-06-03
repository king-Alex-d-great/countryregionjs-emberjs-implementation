import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SelectComponent extends Component {
  get items() {
    return this.items;
  }

  @action
  handleSelection(event, value) {
    return this.args.onSelect(event, value);
  }
}
