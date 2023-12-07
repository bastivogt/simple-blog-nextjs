const CounterService = {
  count: 0,

  onUpdate: () => {},
  setCount(value) {
    this.count = value;
    this.onUpdate();
  },

  getCount() {
    return this.count;
  },

  incCount() {
    this.setCount(this.count + 1);
  },

  decCount() {
    this.setCount(this.count - 1);
  },
};

export { CounterService };
