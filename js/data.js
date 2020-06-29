/* 郎朗口腔 */
Mock.mock("http://localhost/api/index", {
  "data": [
    {
      "id": 1,
      "imgUrl": Mock.Random.image(
        "320x120",
        Mock.Random.hex(),
        "#FFF",
        "png",
        Mock.Random.word()
      ),
      "title": Mock.Random.ctitle(),
      "dec": Mock.Random.csentence(50),
    },
    {
      "id": 2,
      "imgUrl": Mock.Random.image(
        "320x120",
        Mock.Random.hex(),
        "#FFF",
        "png",
        Mock.Random.word()
      ),
      "title": Mock.Random.ctitle(),
      "dec": Mock.Random.csentence(50),
    },
    {
      "id": 3,
      "imgUrl": Mock.Random.image(
        "320x120",
        Mock.Random.hex(),
        "#FFF",
        "png",
        Mock.Random.word()
      ),
      "title": Mock.Random.ctitle(),
      "dec": Mock.Random.csentence(50),
    },
  ],
});
/* 郎朗公益 */
Mock.mock("http://localhost/api/index1", {
  data: [
    {
      "id": 1,
      date: Mock.Random.date(),
      "imgUrl": Mock.Random.image(
        "400x380",
        Mock.Random.hex(),
        "#FFF",
        "png",
        Mock.Random.word()
      ),
      title: Mock.Random.ctitle(),
      dec: Mock.Random.csentence(50),
      color: Mock.Random.hex(),
      "bgColor": "eae9e4",
    },
    {
      id: 2,
      date: Mock.Random.date(),
      "imgUrl": Mock.Random.image(
        "400x190",
        Mock.Random.hex(),
        "#FFF",
        "png",
        Mock.Random.word()
      ),
      title: Mock.Random.ctitle(),
      dec: Mock.Random.csentence(50),
      color: Mock.Random.hex(),
      "bgColor": "ffffff",
    },
    {
      id: 3,
      date: Mock.Random.date(),
      "imgUrl": Mock.Random.image(
        "400x190",
        Mock.Random.hex(),
        "#FFF",
        "png",
        Mock.Random.word()
      ),

      title: Mock.Random.ctitle(),
      dec: Mock.Random.csentence(50),
      color: Mock.Random.hex(),
      "bgColor": "e03854",
    },
  ],
});
Mock.mock("http://localhost/api/newsCategory",{
    "data|4":[
        {
            "id|+1":1,
            "categoryName|1":[
                "行业动态",
                "朗朗资讯",
                "媒体报道",
                "公益活动"
            ]
        }
    ]
})
Mock.mock("http://localhost/api/indexNews",{
    "data|2-4":[
        {
            "id|+1":1,
            "imgUrl|1":[
                Mock.Random.image(
                    "280x150",
                    Mock.Random.hex(),
                    "#FFF",
                    "png",
                    Mock.Random.word()
                  ),
                Mock.Random.image(
                    "280x150",
                    Mock.Random.hex(),
                    "#FFF",
                    "png",
                    Mock.Random.word()
                  ),
                Mock.Random.image(
                    "280x150",
                    Mock.Random.hex(),
                    "#FFF",
                    "png",
                    Mock.Random.word()
                  ),
                Mock.Random.image(
                    "280x150",
                    Mock.Random.hex(),
                    "#FFF",
                    "png",
                    Mock.Random.word()
                  ),
            ],
            "title|1": [
                Mock.Random.ctitle(),
                Mock.Random.ctitle(),
                Mock.Random.ctitle(),
                Mock.Random.ctitle(),
                Mock.Random.ctitle(),
            ],
            "dec|1": [
                Mock.Random.csentence(50),
                Mock.Random.csentence(50),
                Mock.Random.csentence(50),
                Mock.Random.csentence(50),
            ],
            "time|1": [
                Mock.Random.datetime(),
                Mock.Random.datetime(),
                Mock.Random.datetime(),
                Mock.Random.datetime(),
                Mock.Random.datetime(),
            ]
        }
    ]
})