var bannerSrc = {
  banner: [{
      imgurl: "/skins/img/news1.jpg",
      navigator: "../index/index",
    },
    {
      imgurl: "/skins/img/news4.jpg",
      navigator: "../index/index",
    }
  ]
}
var navSrc = {
  nav: [{
      imgurl: "/skins/icons/book_select.png",
      navigator: "../list/list",
      title: "在线学习"
    },
    {
      imgurl: "/skins/icons/party.png",
      navigator: "../party/party",
      title: "组织活动"
    },
    {
      imgurl: "/skins/icons/money.png",
      navigator: "../pay/pay",
      title: "党费缴纳"
    },
    {
      imgurl: "/skins/icons/data.png",
      navigator: "../other/other",
      title: "楼宇支部"
    }
  ]

}
var adSrc = {
  ad: [{
      imgurl: "/skins/img/11.png",
      navigator: "/",
    }
    // ,
    // {
    //   imgurl: "/skins/img/1.png",
    //   navigator: "/",
    // }, {
    //   imgurl: "/skins/img/2.png",
    //   navigator: "/",
    // }
  ]
}
var courseSrc = {
  course_grp: [{
      navigator: "../other/other",
      title: {
        left: "党建动态",
        right: "更多"
      },
      courses: [{
        source: "新华网 2019-07-08",
        title: "巩固党和国家机构改革成果",
        imgurl: "/skins/img/news2.jpg",
        navigator: "../other/other"
      }, {
        source: "新华网 2019-07-08",
        title: "习近平讲故事：英雄出少年",
        imgurl: "/skins/img/news3.jpg",
        navigator: "../other/other"
      }]
    },
    {
      navigator: "../other/other",
      title: {
        left: "专题学习",
        right: "更多"
      },
      courses: [{
        source: "新华网 2019-07-08",
        title: "学习贯彻思想工作精神",
        imgurl: "/skins/img/news7.jpg",
        navigator: "../other/other"
      }, {
        source: "新华网 2019-07-08",
        title: "宣传贯彻党的十九大精神",
        imgurl: "/skins/img/news8.jpg",
        navigator: "../other/other"
      }]
    }

  ]
}

module.exports.navSrc = navSrc;
module.exports.bannerSrc = bannerSrc;
module.exports.adSrc = adSrc;
module.exports.courseSrc = courseSrc;