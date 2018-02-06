# 인덱싱 쿼리와 인덱싱에 사용되는 자료구조

##인덱싱 쿼리

### 인덱싱이란?

자주참조하는 columnm, entry들을 색인화(컬럼을 가리키는 포인터를 따로 저장해놓음)하여 db의 검색속도를 높이는 방법
<br>[indexing](http://www.dbguide.net/publishing/img/knowledge/SQL_351.jpg)

### 인덱싱 쿼리

인덱싱을 사용한 쿼리

'select count(*) from table' vs 'select count(*) from table where pk > 0'
<br>테이블 전체를 참조 vs index만 참조



## 인덱싱에 사용되는 자료구조

B+Tree

### B+ Tree
B tree에서 순차접근이 시간이 많이 걸리는 단점을 보완하기위한 tree

https://imgur.com/a/ytHBB
* 트리는 index set과 leaf노드로 구성
* index set은 데이터가 들어있는 leaf노드를 찾기위한 index노드로 구성됨.
* leaf노드에만 데이터가 들어있음
* leaf노드안의 데이터들은 정렬되어있음

[b+tree insertion](https://www.youtube.com/watch?v=h6Mw7_S4ai0)
-b-tree의 insertion 방식과 유사. insertion과정을 볼때 index set에 주목하셈
(데이터가 중복저장되는것을 볼수있음)
-> m값은 최대로 가질수있는 child node개수, l값은 데이터노드가 최대로 가질수있는 데이터개수임

### why b+ tree not b-tree?

b-tree도 db와 파일시스템 저장할때 쓰이는 자료구조임.
그러나 인덱싱에는 b+tree가 적합하다고 나옴. (즉 실제 record들을 저장할떈 b-tree, index에는 b+tree) 왜 그럼?

* 메모리 효율성
* leaf노드가 일렬로 연결됨 -> full scan시 유리
<br>[](https://imgur.com/a/dpfjA)