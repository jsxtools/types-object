interface ObjectConstructor {
	<T>(value: T): ToObject<T>
	new <T>(value: T): ToObject<T>
	create<T>(value: T): ToObject<T>

	getPrototypeOf<T>(value: T): ToPrototype<T>
	setPrototypeOf<T>(value: T, proto: object | null): T

	hasOwn<T, K>(value: T, key: K): K extends keyof T ? true : false
}

type ToObject<T> =
	'prototype' extends keyof T ? T['prototype']
	: T extends boolean ? Number
	: T extends bigint ? BigInt
	: T extends number ? Number
	: T extends string ? String
	: T extends symbol ? Symbol
	: T extends null ? Record<PropertyKey, unknown>
	: T extends undefined ? Record<PropertyKey, unknown>
	: Extract<T & Record<PropertyKey, unknown>, Record<PropertyKey, unknown>>

type ToPrototype<T> =
	'prototype' extends keyof T ? T['prototype']
	: T extends boolean ? Number
	: T extends bigint ? BigInt
	: T extends number ? Number
	: T extends string ? String
	: T extends symbol ? Symbol
	: T extends null ? never
	: T extends undefined ? never
	: Object
