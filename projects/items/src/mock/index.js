var Mock=require("mockjs")

Mock.mock("/shouyed","get",require("./json/shouye.json"))
Mock.mock("/movie","get",require("./json/movie.json"))
Mock.mock("/a","get",require("./json/a.json"))
Mock.mock("/dy","get",require("./json/faxianhaodianying.json"))
Mock.mock("/fenlan","get",require("./json/fenlan.json"))
Mock.mock("/book","get",require("./json/book.json"))
