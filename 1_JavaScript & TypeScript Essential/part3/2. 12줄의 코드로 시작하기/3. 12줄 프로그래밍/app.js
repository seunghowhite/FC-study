// 설명안된건 프로젝트 세팅 참고.
const ajax = new XMLHttpRequest();
const content = document.createElement('div')//div테그 생성
const container = document.getElementById('root')//루트라는 id값 맨아래에서 쓰임.
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/news/@id.json'//문서에서 제공한 개별 아이템 url

ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function () {
  const id = location.hash.substring(1);//(로케이션은 브라우저에 제공되는 여러가지 기능을 제공) 헤시값을 반환함

  ajax.open('GET', CONTENT_URL.replace('@id', id), false);//클릭시 getURL을 실행하고 또한 그 URL에 @id를 id로 바꿔라.
  ajax.send();

  const newsContent = JSON.parse(ajax.response);//그 url 데이터의 값들을 json파일로 변환
  const title = document.createElement('h1');

  title.innerHTML = newsContent.title;
  content.appendChild(title);
  // console.log(newsContent)//이거안댐
});//해시체인지가 일어났을때 수행할 콜백 함수.


for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');//a테그생성

  a.href = `#${newsFeed[i].id}`;//a테그에 href 값을 먹인다. 클릭시 해시체인지가 id로 변환되도록.일어나 도록 해보자
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;//댓글수comments_count를 생성

  li.appendChild(a);
  ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);//div생성


// 요약 우선적으로 공식 문서에서 제공한 개별 아이템 url을 불러온다. 그때 마킹을 해둔다.
// 1.href에#id값을 먹인다. 그러면 URL이 변경된다.


// 2.이제 window.addEventListener차례
// 해시 체인지가 일어났을때 발생하게 한다.

// 3.id값이 href에 먹여져 있는데 (URL에 해시값을 가저온다) 즉 그것을 location.hash를 가지고 와서 id 변수로 저장한다.

// 4.이제 url을 변환 할 차례 url의 id마킹한 곳에 id를 넣고 불러온다.

// 5. 데이터를 최종적으로 json형태로 변환한다.

// 6. 그다음 innerHTML값으로 넣어준다.

