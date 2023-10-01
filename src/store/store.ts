import {defineStore} from "pinia";

export type ElementIdentifier = "Blue" | "Yellow" | "Green" | null;

export type ElementName =  Exclude<ElementIdentifier, null>;

type Element = {
    name: ElementName;
    currentPosition: number;
    numberOfTools: number;
};

type State = {
    Blue: Element;
    Green: Element;
    Yellow: Element;
    movableElement: string;
    activeElement: "Blue" | "Yellow" | "Green" | null;
    isOpenModal: boolean;
    elemPositions: number[];
};

export const useStore = defineStore("store", {
    state: (): State => {
        const blue: Element = {
            name: 'Blue',
            currentPosition: 1,
            numberOfTools: 2
        };
        const green: Element = {
            name: 'Green',
            currentPosition: 2,
            numberOfTools: 4
        };
        const yellow: Element = {
            name: 'Yellow',
            currentPosition: 3,
            numberOfTools: 6
        };

        return {
            Blue: blue,
            Green: green,
            Yellow: yellow,
            movableElement: '',
            activeElement: null,
            isOpenModal: false,
            elemPositions: [green.currentPosition, blue.currentPosition, yellow.currentPosition],
        };
    },
    persist:true,
    getters: {},
    actions: {
        replaceElement(elem: ElementName, pos: number) {
            if (pos == this.Green.currentPosition) return;
            if (pos == this.Yellow.currentPosition) return;
            if (pos == this.Blue.currentPosition) return;
            if (elem) {
                this[elem].currentPosition = pos;
            }
        },
        setMovableElement(element: string) {
            this.movableElement = element;
        },
        setActiveElement(elem: ElementIdentifier) {
            this.activeElement = elem;
        },
        toggleModalVisible(visible: boolean) {
            this.isOpenModal = visible;
        },
        deleteInstruments(value: number) {
            if (this.activeElement) {
                if (this[this.activeElement].numberOfTools < value) {
                    this[this.activeElement].numberOfTools = 0
                } else {
                    this[this.activeElement].numberOfTools -= +value
                }
            }
        }
    }
});