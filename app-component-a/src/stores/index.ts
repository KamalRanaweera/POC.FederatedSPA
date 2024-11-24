import { defineStore } from "pinia";

export const useComponentStoreA = defineStore('ComponentStoreA', {
    state: () => ({
        _count: 0
    }),
    getters: {
        count: state => state._count
    },
    actions: {
        increment() {
            this._count++;
        },
        decrement(){
            this._count--;
        }
    }
})

