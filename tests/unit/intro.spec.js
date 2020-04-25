import { shallowMount } from '@vue/test-utils';
import Intro from '@/pages/Intro/Intro.vue';

describe('Intro', () => {
  it('renders content properly', () => {
    const wrapper = shallowMount(Intro);
    expect(wrapper).toMatchSnapshot();
  });
});
