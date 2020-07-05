import state from './vuex/state';
import * as mutations from './vuex/mutations';
import * as actions from './vuex/actions';

const namespaced = true;

export default {
  namespaced,
  state,
  mutations,
  actions
}
