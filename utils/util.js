
var index_data = require('../data/index_data.js');
var course_data = require("../data/list_data.js");
var mine_data = require("../data/mine_data.js");

/*index.wxml*/
/*获取bannerArr*/
function getBanner(){
    return index_data.bannerSrc.banner;
}
/*获取navArr */
function getNav(){
    return index_data.navSrc.nav;
}
/*获取adArr */
function getAd(){
    return index_data.adSrc.ad;
}
/*获取courseArr*/
function getCourse(){
    return index_data.courseSrc.course_grp;
}

/*course.wxml*/
/*获取courses*/
function getCourses(){
    return course_data.courseItem.courses;
}

/*获取Mine*/
function getMine() {
  return mine_data.mineSrc.minemenu;
}


module.exports.getBanner = getBanner;
module.exports.getNav = getNav;
module.exports.getAd = getAd;
module.exports.getCourse = getCourse;
module.exports.getCourses = getCourses;
module.exports.getMine = getMine;