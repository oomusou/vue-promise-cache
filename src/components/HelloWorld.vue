<template>
  <div>
    ID：<input type="text" v-model="id"/>&nbsp;
    <button @click="onSubmit">Submit</button>
    <p></p>
    {{ title }}
  </div>
</template>

<script>
import fetchBook from '@/api/book-info';

const onSubmit = function() {
  fetchBook({ id: this.id })
    .then(res => this.title = res.data[0].title);
};

export default {
  name: 'HelloWorld',
  data: () => ({
    id: null,
    title: '',
  }),
  methods: {
    onSubmit,
  },
};
</script>
