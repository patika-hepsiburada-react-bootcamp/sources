import { splitNames } from "./App";

it("splitNames fonksiyonu virgülle ayrılmış ifadeyi parçalayarak geri döndürür.", () => {
	const names = splitNames("ahmet,mehmet,can");

	expect(names.length).toEqual(3);
});
