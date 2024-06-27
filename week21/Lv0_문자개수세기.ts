// https://school.programmers.co.kr/learn/courses/30/lessons/181902

// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때,
// my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,...,
// my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return

import _ from "lodash";
function countingAlphabets(my_string: string): number[] {
  const [ASCII_A, ASCII_Z, ASCII_a, ASCII_z] = [65, 91, 97, 123];
  const xs = _.range(ASCII_A, ASCII_Z).concat(_.range(ASCII_a, ASCII_z));
  const map = new Map();

  for (const x of xs) {
    map.set(String.fromCharCode(x), 0);
  }

  for (const str of my_string) {
    map.set(str, map.get(str) + 1);
  }

  return [...map.values()];
}

console.log(countingAlphabets("Programmers"));
