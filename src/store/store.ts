import {defineStore} from "pinia";


export const useStore = defineStore("movieStore", {
    state: () => ({
        elements: [
            {
                name: 'Green',
                currentPosition: 10
            },
        ],
        // activeTab: 1
    }),
    getters: {},


    actions: {
        replaceElement( pos: any) {
            debugger
            // state.elements[0].currentPosition = pos
            // state.elements[0].currentPosition = pos

            this.elements[0].currentPosition = pos

        },
    }

})

