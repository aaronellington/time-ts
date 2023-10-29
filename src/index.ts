export namespace time {
	export type Duration = number
	export const Millisecond: Duration = 1
	export const Second: Duration = Millisecond * 1000
	export const Minute: Duration = Second * 60
	export const Hour: Duration = Minute * 60

	export class Time {
		public RawDate: Date

		constructor(rawDate: Date) {
			this.RawDate = rawDate
		}

		public Add(duration: Duration): Time {
			const newSeconds = this.RawDate.getTime() + duration
			const newDate = new Date(newSeconds)

			return new Time(newDate)
		}

		public Sub(time: Time): Duration {
			const src = this.RawDate.getTime()
			const dest = time.RawDate.getTime()

			return dest - src
		}
	}

	export function Now(): Time {
		return new Time(new Date())
	}

	export function Since(start: Time): Duration {
		const now = Now()
		return start.Sub(now)
	}
}
