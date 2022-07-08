'strict mode';

function proxied() {
	const target = {
		name: 'John',
		surname: 'Doe',
		address: 'One Way Street 1',
		age: 40,
		[Symbol.toPrimitive](hint) {
			if (hint == "number") {
				return this.age;
			}
			if (hint == "string") {
				return `${this.name} ${this.surname}: ${this.address} (${this.age})`;
			}
			return true;
		}
	}

	const handler = {
		set(target, key, value) {
			switch (key) {
				case 'name':
				case 'surname':
					if (typeof value !== 'string')
						return false;
					if (value.length > 50) 
						value = value.substring(0, 50);
					break;
				case 'age':
					if (typeof value !== 'number' || Number.isNaN(value) || value < 0 || value > 200)
						return false;
					break;
			}
			return Reflect.set(...arguments);
		}
	}

	return new Proxy(target, handler);
}

const dummyText60chars = 'aaaaabbbbbcccccdddddeeeeefffffggggghhhhhiiiiijjjjjkkkkklllll';

const p = proxied();
console.log(`${p}`);

p.name = dummyText60chars;
p.surname = dummyText60chars;
console.log(`${p}`);
p.age = 0;
console.log(`${p}`);
p.age = -1;
console.log(`${p}`);
p.age = 200;
console.log(`${p}`);
p.age = 201;
p.age = 'Apple';
console.log(`${p}`);