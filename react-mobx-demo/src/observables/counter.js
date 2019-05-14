import { computed , decorate, observable} from "mobx"


class CounterVm {





  count = 0;

  get isOdd(){
  	return this.count % 2 === 1
  }
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
decorate(CounterVm, {
	count: observable,
    isOdd: computed
})

export default  new CounterVm();