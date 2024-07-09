// https://school.programmers.co.kr/learn/courses/30/lessons/120839
// 가위는 2 바위는 0 보는 5로 표현합니다.
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return

function winnerRsp(rsp: string): string {
  type xType = {
    [key: string]: number
  }
  const x: xType = {
    "2": 0,
    "0": 5,
    "5": 2,
  };

  return [...rsp].map((str) => x[str]).join("");
}

console.log(winnerRsp("205"));
