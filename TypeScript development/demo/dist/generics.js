"use strict";
// T
// class Iets<TKey, TValue>
// jasmine's SpyObj<MijNService>
// Observable<Data>
// NavigableItem<T>
// AutocompleterComponent<T>
// Partial<T>
function iets(param) {
    return param;
}
function ietsGenerics(param) {
    return param;
}
ietsGenerics(14);
class NederlandseGenerator {
    constructor(value, step) {
        this.value = value;
        this.step = step;
    }
    next() {
        return (this.value = this.step(this.value));
    }
}
let numberGen = new NederlandseGenerator(0, (value) => value + 1);
console.log(numberGen.next()); // 1
console.log(numberGen.next()); // 2
console.log(numberGen.next()); // 3
console.log(numberGen.next()); // 4
let stringGen = new NederlandseGenerator(".", (value) => value + ".");
console.log(stringGen.next()); // ..
console.log(stringGen.next()); // ...
console.log(stringGen.next()); // ....
console.log(stringGen.next()); // .....
class NavigateService {
    static makeNavigable(data) {
        return data.map((x) => ({
            isHighlighted: false,
            item: x,
        }));
    }
    static next(navis) {
        for (let i = 0; i < navis.length; i++) {
            if (navis[i].isHighlighted) {
                navis[i].isHighlighted = false;
                navis[i + 1].isHighlighted = true;
                return;
            }
        }
        navis[0].isHighlighted = true;
    }
    static getHighlightedItem(navis) {
        var _a;
        return (_a = navis.find((x) => x.isHighlighted)) === null || _a === void 0 ? void 0 : _a.item;
    }
}
let eersteDataSet = [1, 2, 3];
let tweedeDataSet = ["hoi", "doei", "bla"];
let derdeDataSet = [{ x: "hoi" }, { x: "doei" }, { x: "bla" }];
let eersteNavis = NavigateService.makeNavigable(eersteDataSet);
let tweedeNavis = NavigateService.makeNavigable(tweedeDataSet);
let derdeNavis = NavigateService.makeNavigable(derdeDataSet);
NavigateService.next(eersteNavis);
NavigateService.next(eersteNavis);
NavigateService.next(tweedeNavis);
NavigateService.next(tweedeNavis);
NavigateService.next(tweedeNavis);
NavigateService.next(derdeNavis);
console.log(eersteNavis);
console.log(tweedeNavis);
console.log(derdeNavis);
console.log(NavigateService.getHighlightedItem(eersteNavis));
console.log(NavigateService.getHighlightedItem(tweedeNavis));
console.log(NavigateService.getHighlightedItem(derdeNavis));
class LongValue {
    set(newValue) {
        this.value || (this.value = newValue);
        this.value =
            this.value.length > newValue.length ? this.value : newValue;
    }
}
let lvs = new LongValue();
lvs.set("abc");
lvs.set("hallo");
lvs.set("k");
lvs.set("hele lange tekst");
lvs.set("blabla");
console.log('langste tekst:', lvs.value);
let lvna = new LongValue();
lvna.set([1, 2]);
lvna.set([1, 2, 5]);
lvna.set([1, 2, 5, 8, 9]);
lvna.set([1, 2, 5, 8]);
lvna.set([1]);
console.log('langste arraywaarde:', lvna);
class Whatyamacallit {
}
// factory function
function create(Class) {
    return new Class();
}
// create(42);
// create('hoi');
let instance = create(Whatyamacallit);
console.log(instance);
/////////////////////////////////
class Whozemed {
    constructor(x, y) {
    }
}
// factory function
function createMetParams(Class, ...args) {
    return new Class(...args);
}
// createMetParams(Whozemed, 25, 'hoi');
// createMetParams(Whozemed, 'hoi', 25);
// createMetParams(Whozemed, 'hoi');
// createMetParams(Whozemed, 25, 'hoi', 99);
let whoinstance = createMetParams(Whozemed, 25, 'hoi');
console.log(whoinstance);
let lijstje4 = [4, 8];
lijstje4.forEach(val => {
});
lijstje4.forEach((val, index) => {
});
//# sourceMappingURL=generics.js.map