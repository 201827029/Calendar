//var 전역변수
//let 지역변수
//const는 값을 재할당할 수 없다.
//const와 let은 변수를 재선언할 수 없다.

let date = new Date();  //new date()함수는 = 현재 날짜와 시간을 알려준다.
let a = 0;
let b = 0;


const renderCalendar = () => { // =>

  let viewYear = date.getFullYear(); //현재 연도를 4비트의 숫자(YYYY)로 리턴한다.
  let viewMonth = date.getMonth(); //월(month) 표현 : 1월(0) ~ 12월(11)


  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate(); //지난 달 마지막 날짜와 요일
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate(); //이번 달 마지막 날짜와 요일
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  // ... = 전개 연산자  array(n) 으로 배열 생성
  //모두 empty 겂이기 때문에 key() 메소드를 사용해서 0부터 n-1 까지 Array iterator 생성된다.
  const nextDates = [];

  document.querySelector('.year').textContent = `${viewYear}년`;
  document.querySelector('.month').textContent = `${viewMonth + 1}월`;

  if(PLDay !== 6) //마지막 요일이 토요일이 아닐 때
  {
    for(let i = 0; i<PLDay + 1; i++)
    {
      prevDates.unshift(PLDate - i); //unshift = 배열 맨 앞에 값을 추가
    }
  }

  for (let i = 1; i<7 - TLDay; i++)
  {
    nextDates.push(i); //push = 배열 맨 뒤에 값을 추가
  }

  const dates = prevDates.concat(thisDates, nextDates); //concat 메소드를 이용해 배열을 합친다.

  dates.forEach((date, i) =>
  {
    dates[i] = `<div class="date">${date}</div>`;
  })
  //foreach 메소드로 전체 요소를 돌면서 데이터 수정

  document.querySelector('.dates').innerHTML = dates.join('');

}


const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1); // 월에 +1을 뺀 후에
  renderCalendar(); // 출력한다.
}

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1); // 월에 +1을 더한 후에
  renderCalendar(); // 출력한다.
}

const goToday = () => {
  date = new Date(); //현재 날짜로 이동
  renderCalendar();
}

renderCalendar();

const checkYear = () => {
  b++;
  if(b / 2 % 1)
  {
    document.querySelector('.yearpos').style.display = "block";
  }
  else
  {
    document.querySelector('.yearpos').style.display = "none";
  }
}

const checkMonth = () => {
  a++;
  if(a / 2 % 1)
  {
    document.querySelector('.monthpos').style.display = "block";
  }
  else
  {
    document.querySelector('.monthpos').style.display = "none";
  }
}

 //클릭 시 해당 월로 바꾸고 div 비활성화
const chk1 = () => {
  date.setMonth(date.getMonth() * 0);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk2 = () => {
  date.setMonth(date.getMonth() * 0 + 1);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk3 = () => {
  date.setMonth(date.getMonth() * 0 + 2);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk4 = () => {
  date.setMonth(date.getMonth() * 0 + 3);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk5 = () => {
  date.setMonth(date.getMonth() * 0 + 4);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk6 = () => {
  date.setMonth(date.getMonth() * 0 + 5);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk7 = () => {
  date.setMonth(date.getMonth() * 0 + 6);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk8 = () => {
  date.setMonth(date.getMonth() * 0 + 7);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk9 = () => {
  date.setMonth(date.getMonth() * 0 + 8);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk10 = () => {
  date.setMonth(date.getMonth() * 0 + 9);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk11 = () => {
  date.setMonth(date.getMonth() * 0 + 10);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}
const chk12 = () => {
  date.setMonth(date.getMonth() * 0 + 11);
  document.querySelector('.monthpos').style.display = "none";
  a = 0;
  renderCalendar();
}

function inputYear() {
  let inputValue = document.getElementById("inputyear").value; //년도 입력하여 저장할 변수
  document.querySelector('.yearpos').style.display = "none";
  b = 0;
  viewYear = date.setFullYear(inputValue);
  renderCalendar();

}
