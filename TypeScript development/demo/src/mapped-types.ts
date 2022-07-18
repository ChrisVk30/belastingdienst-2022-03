// types die gemapped zijn


// bestaande keys wil gebruiken

interface Config {
	baseUrl: string;

	nrOfItemsPerPage: number;

	title: string;

	// nog 40 properties
}

type OptionalConfig = {
	[P in keyof Config]?: Config[P];
}

// type EntityInForm = {
// 	[P in keyof Entity]?: FormControl<Entity[P]>;
// }

// let partialConfig: Config = { title: 'hoi' };
let echtePartialConfig: OptionalConfig = { title: 'hoi' };

// interface OptionalConfig {
// 	baseUrl?: string;

// 	nrOfItemsPerPage?: number;

// 	title?: string;	

// 	// nog 40 properties
// }


// unittesten met jasmine
let someObj = {
	func() {
		return 987654.
	},
	x: 24
}

function spyOn<T, P extends keyof T>(obj: T, prop: P) {
	return {
		and: {
			returnValue(value: T[P]) {

			}
		}
	}
}


spyOn(someObj, 'func').and.returnValue(() => 42);
spyOn(someObj, 'func').and.returnValue(42);
spyOn(someObj, 'func').and.returnValue('hoi');
spyOn(someObj, 'x').and.returnValue(999);
spyOn(someObj, 'x').and.returnValue('hoi');
spyOn(someObj, 'sdkjfhjkdjfkds').and.returnValue('hoi');
