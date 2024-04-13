export class prettyCode {

    prettyKeys;
    position;
    triggered;
    pretty;
    witness;
    p;

    constructor(witness) {
        this.witness = witness;
        this.position = 0;
        this.triggered = false;
        this.prettyKeys = {
            'ArrowLeft': 37,
            'ArrowUp': 38,
            'ArrowRight': 39,
            'ArrowDown': 40,
        }
        this.pretty = [39, 38, 40, 37, 37, 40, 40, 38];
    }

    analyze(input) {
        if (this.prettyKeys[input.code] === this.pretty[this.position]) {
            this.position += 1;
            if (this.position === 8) {
                this.triggerPretty();
                this.position = 0;
            }
        } else {
            this.position = 0;
        }
    }

    initialize() {
        document.addEventListener("keydown", (input => this.analyze(input)));
    }

    triggerPretty() {
        if (!this.triggered) {
            this.witness.value = true;
            this.p = new Audio('/pretty.mp3');
            this.p.play();
        }
    }

    stopPretty() {
        this.p.pause();
        this.p.currentTime = 0;
        this.position = 0;
        this.triggered = false;
        this.witness.value = false;
    }
}