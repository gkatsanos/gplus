import { shallowMount } from '@vue/test-utils';
import Intro from '@/pages/Intro/Intro.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Intro);
    expect(wrapper.text()).toMatch(msg);
  });
});
