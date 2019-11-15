<template>
  <div>
    <div>{{ computedCount }}</div>
    <button @click="inc">加</button>
    <button>这是一个测试测试测试测试测试</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    inc () {
      this.count++
    },
    errThorw() {
      throw new Error('"getIntArray"只接受整数类型的参数');
    },
    exam() {
      console.log('exam执行')
    },
    callBack() {
      console.log('callBack被调用了')
      this.exam()
    }
  },
  computed: {
    computedCount: function () {
      return this.count
    }
  }
}
</script>
