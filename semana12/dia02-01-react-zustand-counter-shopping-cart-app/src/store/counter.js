import { create } from 'zustand'

export const useCounterStore = create(
  (set) => ({
    //Estado inicial
    count: 99,
    //Actions
    increment: () => {
      console.log('incrementando++')
      set(state => {
        return {
          count: state.count + 1
        }
      })
    },
    decrement: () => {
      console.log('decrementando--')
      set(state => {
        return {
          count: state.count - 1
        }
      })
    },
    // TODO: Implementar la funcion incrementByValue y usarla en el componente <Counter />
    incrementByValue: (value) => {
      set(state => {
        return {
          count: state.count + value
        }
      })
    }
  })
)