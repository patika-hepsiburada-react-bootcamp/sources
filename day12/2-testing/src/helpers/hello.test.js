import { sayHello } from "./hello";

it("hello fonksiyonu verilen parametreye prefix ekleyerek döndürür", () => {
	const title = sayHello("Ahmet");

	expect(title).toEqual("Hello Ahmet");
});
