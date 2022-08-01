interface ObjectConstructor {
	<T>(value: T): Extract<T, object>
	new <T>(value: T): Extract<T, object>

	getPrototypeOf<T>(value: T): 'prototype' extends keyof T ? T['prototype'] : null
	setPrototypeOf<T>(value: T, proto: object | null): T

	hasOwn<T, K>(value: T, key: K): K extends keyof T ? true : false
}
