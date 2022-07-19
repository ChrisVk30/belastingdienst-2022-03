"use strict";
// types die gemapped zijn
// type EntityInForm = {
// 	[P in keyof Entity]?: FormControl<Entity[P]>;
// }
// let partialConfig: Config = { title: 'hoi' };
let echtePartialConfig = { title: 'hoi' };
// interface OptionalConfig {
// 	baseUrl?: string;
// 	nrOfItemsPerPage?: number;
// 	title?: string;	
// 	// nog 40 properties
// }
// unittesten met jasmine
let someObj = {
    func() {
        return 987654.;
    },
    x: 24
};
function spyOn(obj, prop) {
    return {
        and: {
            returnValue(value) {
            }
        }
    };
}
spyOn(someObj, 'func').and.returnValue(() => 42);
spyOn(someObj, 'func').and.returnValue(42);
spyOn(someObj, 'func').and.returnValue('hoi');
spyOn(someObj, 'x').and.returnValue(999);
spyOn(someObj, 'x').and.returnValue('hoi');
spyOn(someObj, 'sdkjfhjkdjfkds').and.returnValue('hoi');
//# sourceMappingURL=mapped-types.js.map