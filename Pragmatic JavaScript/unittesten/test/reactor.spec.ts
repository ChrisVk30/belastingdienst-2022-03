import { expect } from "chai";
import sinon, { StubbedInstance, stubObject } from "ts-sinon";
import { Pump } from "src/pump";
import { Reactor } from "src/reactor"; // dit is iets wat JP gewoon fijner vindt

describe('Reactor', () => {
    let sut: Reactor; // system under test
    let pump: Pump = {
        cool: () => {}
    };
    let stubbedPump: StubbedInstance<Pump>;

    beforeEach(() => {
        sut = new Reactor();
        stubbedPump = stubObject<Pump>(pump);
    });

    it('splits atoms to generate energy', () => {
        sut.temperature = 40;

        sut.split();

        expect(sut.temperature).to.be.greaterThan(50);
    });

    it('uses pumps to cool the reactor down when it gets too warm', () => {
        // Arrange
        sut.pumps.push(stubbedPump);

        // Act
        sut.temperature = Reactor.MAX_TEMPERATURE - 5;
        sut.split();

        // Assert
        sinon.assert.calledOnce(stubbedPump.cool);
    });

    it('does not use the pumps when it hasn\'t reached the maximum temperature', () => {
        sut.pumps.push(stubbedPump);

        sut.temperature = 0 - Reactor.MAX_TEMPERATURE;
        sut.split();

        sinon.assert.notCalled(stubbedPump.cool);
    });
});
