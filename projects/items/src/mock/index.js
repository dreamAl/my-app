var Mock=require("mockjs")

Mock.mock("/shouyed","get",require("./json/shouye.json"))
Mock.mock("/movie","get",require("./json/movie.json"))
Mock.mock("/b","get",require("./json/b.json"))