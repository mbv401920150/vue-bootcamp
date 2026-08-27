import { mount } from '@vue/test-utils';

import IndecisionView from '@/views/IndecisionView.vue';

describe('<IndecisionView />', () => {
  test('should match against the snapshot', () => {
    const wrapper = mount(IndecisionView);
    console.log({ wrapperHtml: wrapper.html() });
  });
});
