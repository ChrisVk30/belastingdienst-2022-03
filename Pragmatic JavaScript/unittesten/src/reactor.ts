import { Pump } from "./pump";

export class Reactor {
    static MAX_TEMPERATURE = 500;

    temperature: number = 20;
    pumps: Pump[] = [];

    split() {
        this.temperature += 30;

        if(this.temperature > Reactor.MAX_TEMPERATURE) {
            this.pumps.forEach(p => p.cool(this));
        }
    }
}
