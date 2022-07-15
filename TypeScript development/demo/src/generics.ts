

// T
// class Iets<TKey, TValue>

// jasmine's SpyObj<MijNService>
// Observable<Data>
// NavigableItem<T>
// AutocompleterComponent<T>
// Partial<T>

function iets(param: any) {
    return param;
}
function ietsGenerics<T>(param: T) {
    return param;
}
ietsGenerics(14);


interface InterfaceDing<T> {

}

class NederlandseGenerator<T> {
    constructor(private value: T, public step: (value: T) => T) { }

    next() {
        return this.value = this.step(this.value);
    }
}

let numberGen = new NederlandseGenerator<number>(0, value => value + 1);
console.log(numberGen.next()); // 1
console.log(numberGen.next()); // 2
console.log(numberGen.next()); // 3
console.log(numberGen.next()); // 4


let stringGen = new NederlandseGenerator<string>('.', value => value + '.');
console.log(stringGen.next()); // ..
console.log(stringGen.next()); // ...
console.log(stringGen.next()); // ....
console.log(stringGen.next()); // .....


interface NavigableItem<T> {
    isHighlighted: boolean;

    item: T;
}

class NavigateService {
    static makeNavigable<T>(data: T[]): NavigableItem<T>[] {
        return data.map(x => ({
            isHighlighted: false,
            item: x
        }));
    }

    static next<T>(navis: NavigableItem<T>[]) {
        for (let i = 0; i < navis.length; i++) {
            if (navis[i].isHighlighted) {
                navis[i].isHighlighted = false;
                navis[i + 1].isHighlighted = true;
                return;
            }
        }

        navis[0].isHighlighted = true;
    }

    static getHighlightedItem<T>(navis: NavigableItem<T>[]) {
        return navis.find(x => x.isHighlighted)?.item;
    }
}

let eersteDataSet = [1, 2, 3];
let tweedeDataSet = ['hoi', 'doei', 'bla'];
let derdeDataSet = [{ x: 'hoi' }, { x: 'doei' }, { x: 'bla' }];

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
