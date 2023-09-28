import {defineStore} from "pinia";

interface State {
    Blue: {
        name: string;
        currentPosition: number;
    };
    Green: {
        name: string;
        currentPosition: number;
    };
    Yellow: {
        name: string;
        currentPosition: number;
    };
    movableElement: string;
    elemPositions: number[];
}

export const useStore = defineStore("movieStore", {
    state: (): State => {
        const blue = {
            name: 'Blue',
            currentPosition: 1
        };
        const green = {
            name: 'Green',
            currentPosition: 2
        };
        const yellow = {
            name: 'Yellow',
            currentPosition: 3
        };

        return {
            Blue: blue,
            Green: green,
            Yellow: yellow,
            movableElement: '',
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
        }
    }
});