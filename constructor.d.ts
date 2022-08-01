interface ObjectConstructor {
	<T>(value: T): Extract<T, object>
	new <T>(value: T): Extract<T, object>
}
