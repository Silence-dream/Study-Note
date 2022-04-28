let activeEffect

class Dep {
  subscribers = new Set()
  // 订阅
  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }
  // 发布
  notify() {
    this.subscribers.forEach(effect => effect())
  }
}

function watchEffect(effect) {
  activeEffect = effect
  effect()
}


const dep = new Dep()

let actualCount = 0
const state = {
  get count() {
    dep.depend()
    return actualCount
  },
  set count(newCount) {
    actualCount = newCount
    dep.notify()
  }
}

watchEffect(() => {
  console.log(state.count)
}) // 0

state.count++ // 1
