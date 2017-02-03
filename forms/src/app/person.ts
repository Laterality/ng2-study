export class Person
{
	constructor(
		public id: number,
		public name: string,
		public nickname: string,
		public emailId?: string,
		public emailHost?: string
	){}
}