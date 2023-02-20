// 요약.
// url값을 저장하여 데이터를 열고 저장하고 json형태로 변환한다.

// for문을 돌면서 테그들을 생성 하는데.성성된 태그를 최정적으로 id값을 지정된 곳에 넣는다.
//   테그생성 -> 테그에 innerHTML해서 값을 넣고 -> appendChild로 특정 id에 넣는다.
//*********************************************************************************** */


const ajax = new XMLHttpRequest();//ajax변수에 ajax기능을 대입한다.
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';//NEWS_URL에 open api를 등록한다.

ajax.open('GET', NEWS_URL, false);//ajax사용법 중 하나로 동기적으로 어디서 가지고 올것 인지 정한다. 

ajax.send();//데이터를 가지고 온다.

const newsFeed = JSON.parse(ajax.response);//괄호안의 데이터를 json객체 대이터로 변환한다.
const ul = document.createElement('ul');// document.createElement은 html을 생성할수 있게 해준다, ul을 생성했다.

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');//html테그 li생성

  li.innerHTML = newsFeed[i].title;//for문을 돌면서 데이터의 타이틀을 li테그에 넣는다.

  ul.appendChild(li);//li테그를 ul테그에 넣는다.
}

document.getElementById('root').appendChild(ul);//root라는id에 ul을 넣는다.


