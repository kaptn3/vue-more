let app = new Vue({
  el: '#app',
  data: {
    items: [
      { id: 1, name: 'List item' },
      { id: 2, name: 'List item' },
      { id: 3, name: 'List item' },
      { id: 4, name: 'List item' },
      { id: 5, name: 'List item' },
      { id: 6, name: 'List item' },
      { id: 7, name: 'List item' },
      { id: 8, name: 'List item' },
      { id: 9, name: 'List item' },
      { id: 10, name: 'List item' },
      { id: 11, name: 'List item' },
      { id: 12, name: 'List item' },
      { id: 13, name: 'List item' },
      { id: 14, name: 'List item' },
      { id: 15, name: 'List item' }
    ],
    count: 5
  },
  methods: {
    showMore () {
      if (this.count < this.items.length) {
        if ((this.count + 5) <= this.items.length) {
        this.count += 5;
        } else {
          this.count += this.count + 5 - this.items.length - 1;
        }
      }
      console.log(this.count);
    }
  }
})