const ajax = new XMLHttpRequest(); //AJAX 이렇게하면  변수에다가 저장한 값을 저장한다.
const news_url = 'https://api.hnpwa.com/v0/news/1.json'

ajax.open('GET', news_url, false)
// 사용법중 하나. 동기적으로 어디서 가지고 올 것인지 정하겠다.

ajax.send();
// 데이터를 가지고 온다

// console.log(ajax.response);
// 그 가지고온 데이터가 어디에 있는가? ajax.response에 있다.

// 개발자 도구에서 preview를 보면 데이터가 이쁘게 나온다.(객체로 나온다.)

// 그래서 객체인 json형식으로 바꿔야 한다.

const newsFeed = JSON.parse(ajax.response)
// 괄호안의 데이터를 JSON 객체 데이터로 바꿔준다.
const ul = document.createElement('ul');
// document가 바로 html을 조작하는 도구.


for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');

  li.innerHTML = newsFeed[i].title
  ul.appendChild(li);

}

document.getElementById('root').appendChild(ul)
// appendchild는 자식 div태그 하위의 자식요소를 괄호 안에 있는걸 추가한다.

