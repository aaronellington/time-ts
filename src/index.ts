export namespace time {
	export type Duration = number
	export const Millisecond: Duration = 1
	export const Second: Duration = Millisecond * 1000
	export const Minute: Duration = Second * 60
	export const Hour: Duration = Minute * 60
}
