var Mock=require("mockjs")

Mock.mock("/shouyed","get",require("./json/shouye.json"))
Mock.mock("/movie","get",require("./json/movie.json"))
Mock.mock("/a","get",require("./json/a.json"))
Mock.mock("/dy","get",require("./json/faxianhaodianying.json"))
Mock.mock("/fenlan","get",require("./json/fenlan.json"))
Mock.mock("/book","get",require("./json/book.json"))
Mock.mock("/xiaozua","get",require("./json/xiaozua.json"))
Mock.mock("/xiaozub","get",require("./json/xiaozub.json"))
Mock.mock("/xiaozuc","get",require("./json/xiaozuc.json"))
Mock.mock("/goodBook","get",require("./json/goodBook.json"))
Mock.mock("/searchClass","get",require("./json/searchClass.json"))


