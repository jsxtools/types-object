interface ObjectConstructor {
	<T>(value: T): Extract<T, object>
}
