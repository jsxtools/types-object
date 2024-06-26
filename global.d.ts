interface ObjectConstructor {
	<T>(value: T): ToObject<T>
	new <T>(value: T): ToObject<T>
	create<T>(value: T): ToObject<T>

	getPrototypeOf<T>(value: T): ToPrototype<T>
	setPrototypeOf<T>(value: T, proto: object | null): T

	hasOwn<T, K>(value: T, key: K): K extends keyof T ? true : false
}

type ToObject<T> =
	T extends boolean ? Boolean
	: T extends bigint ? BigInt
	: T extends number ? Number
	: T extends string ? String
	: T extends symbol ? Symbol
	: [keyof T] extends [never]
	? Record<never, never>
	: T

type ToPrototype<T> =
	T extends boolean ? Boolean
	: T extends bigint ? BigInt
	: T extends number ? Number
	: T extends string ? String
	: T extends symbol ? Symbol
	: [keyof T] extends [never]
	? 'prototype' extends keyof T ? T['prototype']
	: Object
	: null
