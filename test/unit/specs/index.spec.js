import { mount } from '@vue/test-utils'
import Index from '@/components/index'

describe.only('Index.vue', () => {
  it('渲染Index组件', () => {
    const wrapper = mount(Index) // 挂载组件

    // const Constructor = Vue.extend(HelloWorld); // 引入Vue方式挂载组件
    // const vm = new Constructor().$mount();

    expect(wrapper.element).toMatchSnapshot()
  })

  it('初始化之为0', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm.count).toEqual(0)
  })

  it('加1', () => {
    const wrapper = mount(Index)
    wrapper.vm.inc()
    expect(wrapper.vm.count).toEqual(1)
  })

  it('抛出异常', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm.errThorw).toThrow('"getIntArray"只接受整数类型的参数')
  })

  it('测试jest.fn()调用', () => {
    let mockFn = jest.fn();
    let result = mockFn(1, 2, 3);

    // 断言mockFn的执行后返回undefined
    expect(result).toBeUndefined();
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
    // 断言mockFn被调用了一次
    expect(mockFn).toHaveBeenCalledTimes(1);
    // 断言mockFn传入的参数为1, 2, 3
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
  })
  // it('回调函数', async () => {
  //   const wrapper = mount(Index)
  //   // expect.assertions(1);
  //   let mockFn = jest.fn()
  //   await wrapper.vm.callBack(mockFn)
  //   // 断言mockFn执行了
  //   expect(mockFn).toBeCalled();
  //   // 断言mockFn执行了1次
  //   expect(mockFn).toHaveBeenCalledTimes(1);
  // })
  // it('有参回调函数', async () => {
  //   const wrapper = mount(Index)
  //   expect.assertions(1);
  //   let mockFn = jest.fn((num1, num2) => {
  //     return num1 + num2
  //   });
  //   let result = mockFn(1, 2)
  //   await wrapper.vm.callBack(result)
  //   // 断言mockFn执行了
  //   expect(result).toBeCalled();
  //   // 断言mockFn执行了1次
  //   expect(mockFn).toHaveBeenCalledTimes(1);
  //   // 断言mockFn的参数是1，2
  //   expect(mockFn).toHaveBeenCalledWith(1, 2);
  //   // 断言mockFn执行的结果是3
  //   expect(mockFn).toBe(3);
  // })
})
