import { expect } from "chai";
import sinon from "sinon";
import { Pump } from "src/pump";
import { Reactor } from "src/reactor"; // dit is iets wat JP gewoon fijner vindt

describe('Reactor', () => {
    let sut: Reactor; // system under test

    beforeEach(() => {
        sut = new Reactor();
    });

    it('splits atoms to generate energy', () => {
        sut.temperature = 40;

        sut.split();

        expect(sut.temperature).to.be.greaterThan(50);
    });

    it('uses pumps to cool the reactor down when it gets too warm', () => {
        // Arrange
        let fakePump: Pump = {
            cool: sinon.stub()
        };
        sut.pumps.push(fakePump);
                
        // Act
        sut.temperature = Reactor.MAX_TEMPERATURE - 5;
        sut.split();

        // Assert
        sinon.assert.calledOnce(fakePump.cool as any); // leeeeeeeeeeeeeelijk. wordt snel gefixt.
    });

    it('does not use the pumps when it hasn\'t reached the maximum temperature', () => {
        let fakePump: Pump = {
            cool: sinon.stub()
        };
        sut.pumps.push(fakePump);

        sut.temperature = 0 - Reactor.MAX_TEMPERATURE;
        sut.split();

        sinon.assert.notCalled(fakePump.cool as any); // leeeeeeeeeeeeeelijk. wordt snel gefixt.
    });
});
