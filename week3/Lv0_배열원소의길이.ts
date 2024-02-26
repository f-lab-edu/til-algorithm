// strlist는 알파벳 소문자, 대문자, 특수문자로 구성
// strlist 각 원소의 길이를 담은 배열을 return
//import _ from "lodash";

function strLenght(strlist: string[]): number[] {
  return strlist.map((str) => str.length);
}

// function lodash_strLenght(strlist: string[]): number[] {
//   return _.map(strlist, (str) => str.length);
// }

console.log(strLenght(["asc", "Edfd", "#fD%^^"]));
//console.log(lodash_strLenght(["asc", "Edfd", "#fD%^^"]));
