/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import { mount } from '@vue/test-utils';
import baseVue from '@/button/demos/base.vue';
import mobileVue from '@/button/demos/mobile.vue';
import sizeVue from '@/button/demos/size.vue';
import statusVue from '@/button/demos/status.vue';
import testVue from '@/button/demos/test.vue';

const mapper = {
  baseVue,
  mobileVue,
  sizeVue,
  statusVue,
  testVue,
};

describe('Button', () => {
  Object.keys(mapper).forEach((demoName) => {
    it(`Button ${demoName} demo works fine`, () => {
      const wrapper = mount(mapper[demoName]);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
