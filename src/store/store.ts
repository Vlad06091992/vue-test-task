import {defineStore} from "pinia";

interface State {
    Blue: {
        name: string;
        currentPosition: number;
        numberOfTools:number;
    };
    Green: {
        name: string;
        currentPosition: number;
        numberOfTools:number;
    };
    Yellow: {
        name: string;
        currentPosition: number;
        numberOfTools:number;
    };
    movableElement: string;
    activeElement: string;
    isOpenModal:boolean;
    elemPositions: number[];
}

export const useStore = defineStore("movieStore", {
    state: (): State => {
        const blue = {
            name: 'Blue',
            currentPosition: 1,
            numberOfTools:2
        };
        const green = {
            name: 'Green',
            currentPosition: 2,
            numberOfTools:4
        };
        const yellow = {
            name: 'Yellow',
            currentPosition: 3,
            numberOfTools:6
        };

        return {
            Blue: blue,
            Green: green,
            Yellow: yellow,
            movableElement: '',
            activeElement:'Green',
            isOpenModal:false,
            elemPositions: [green.currentPosition, blue.currentPosition, yellow.currentPosition],
        };
    },
    getters: {},
    actions: {
        replaceElement(elem: "Blue" | "Yellow" | "Green", pos: number) {
            if (pos == this.Green.currentPosition) return
            if (pos == this.Yellow.currentPosition) return
            if (pos == this.Blue.currentPosition) return
            this[elem].currentPosition = pos;
        },
        setMovableElement(element: string) {
            this.movableElement = element;
        },
        setActiveElement(elem: "Blue" | "Yellow" | "Green") {
            this.activeElement = elem;
            console.log(this.activeElement)
        },
        toggleModalVisible(visible:boolean) {
            this.isOpenModal = visible
        }
    }
});