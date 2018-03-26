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
      { id: 12, name: 'List item' }
    ],
    view: 5,
    count: 5,
    isShowing: true
  },
  methods: {
    showMore () {
      if (this.count < this.items.length) {
        if ((this.count + this.view) <= this.items.length) {
        this.count += this.view;
        } else {
          this.count += this.items.length - this.count;
        }
      }
      if (this.count === this.items.length) {
        this.isShowing = false;
      }
    }
  }
})