# Hashmap vs Red-Black Tree
해쉬맵과 레드블랙트리가 무엇이며 같은 양의 데이터를 같은 횟수로 저장할 때 어떤 게 더 효율적인가?

## Red-Black Tree
### BST(이진탐색트리)
* left-child < root < right-child 를 만족하도록 트리정렬
* 삽입 순서에따라 트리모양 비대칭
<br><img src="http://cfile7.uf.tistory.com/image/265D7639581643112AEABA" width="370" height="300">

### B-Tree
* make it balanced! 
* 항목이 삽입되거나 삭제될 때, 내부 노드는 해당 범위의 자식 노드의 수를 만족시키기 위해 분리되거나 혹은 다른 노드와 합쳐지게 된다. <br>
* 하나의 노드는 2개 이상의 값을 가질수 있음
<br> _※ 하나의 노드에 2개 이상의 값이 들어가 있을경우 반드시 정렬된 상태로 있어야함_
![insertion](https://upload.wikimedia.org/wikipedia/commons/3/33/B_tree_insertion_example.png)
> + 노드를 삽입했을때 child노드가 1개만있는 상황이 있을수도 있자나여 그럼 어케 하나여?
> <br> --> child노드를 새로 만들지않고 parant가 될뻔한 노드에다가 데이터를 추가해 버려여. 
> + 그럼 만약에 노드를 추가했는데 child노드가 1개뿐이고 parent노드에 추가할자리도 없으면 어떡하죠?
> <br> --> 추가하려는 부분을 child가 2개인 모양으로 재배치합니다.

### 2-3-4 tree
* 2-3-4는 트리가 가질수있는 node를 뜻함. 걍 트리가 가질수있는 child개수라고 생각하면 쉬움
> 2노드: 하나의 node는 1개의 값과 2개의 child노드를 가질수 있음.(이진트리는 모두2노드로 구성되어있겠져?)
> <br> 3노드: 하나의 node는 2개의 값과 3개의 child노드를 가질수 있음.
> <br> 4노드: 맞춰보세용
* 여기서주의할점은 2노드가 child를 1개만 가지거나 3노드가 child를 1개 또는 2개만가질수는없음
![](http://cfile4.uf.tistory.com/image/194B7A574D256DC5010ABB)
* 모든 leaf 노드들의 depth는 동일하다

### Red Black tree
* 2-3-4 tree를 이진트리형태로 구현한 tree
* 2-3-4 tree에서 같은 노드에있던 데이터를 빨간색으로표현
![](https://i.imgur.com/l6r9PSD.png)
![](https://secweb.cs.odu.edu/~zeil/cs361/web/website/Lectures/avl/pages/redblacktree.gif)

## Hashmap
*Map*(key-value쌍으로이루어진 집합. 중복을허용하지않음)을 *Hash*라는 자료구조로 구현한것

> [hashmap에서 해시충돌이 일어나면 어케 해결하징?](http://odol87.tistory.com/4)
> <br> 충돌난 인덱스에있는 값을 Head node로하는 linked list로 해결합니다
> <br> 요렇게 하나의 버켓(해쉬인덱스)에 여러 item을 chain처럼 저장하는걸 Seperate chaning이라고 부릅니다.
> <br> ![](https://he-s3.s3.amazonaws.com/media/uploads/0e2c706.png)

## 문제출제의도?
[자바의 TreeMap은 Red-Black Tree로 구현되어있다.](http://grepcode.com/file/repository.grepcode.com/java/root/jdk/openjdk/6-b14/java/util/TreeMap.java)
<br> c++ 의 std::map 또한 red-black tree로 구현되어있음!
<br> ∴ HashMap과 Red-Black Tree의 차이? = HashMap과 TreeMap의 차이?

## Treemap
*map*을 *tree*라는 자료구조로 구현한것
<br> BUT hash와 비교했을때 tree에는 큰특징이자 장점이있는데 바로 데이터를 정렬할수있다는거임
<br> (심지어 넣으면 key값에따라 알아서 정렬됨)
<br> ![상속관계](http://way2java.com/wp-content/uploads/2011/12/ss.png)

## Hashmap vs Treemap
키포인트는 데이터를 정렬하느냐 마느냐임
<br> __hashmap은 데이터정렬을 보장하지않고 treemap은 데이터정렬을 보장해야함__
- hashmap은 key,value에 null값을 허용함 BUT treemap은 null값을 허용하지않음
<br>(값을 정렬하려면 null값이 있어선 안되니까여)
- insert할때 hashmap은 해쉬함수만 돌리면되지만 --> O(1) 
<br> treemap은 정렬된상태로있어야하기때문에 insert할 key-value쌍이 tree안에서 자기자리를찾아야함 
<br> --> O(log n) + f(m) (Red-Black tree이므로 rebalancing하는 시간도 추가됨)
- _따라서n개의데이터를입력한다고했을때 hashmap의경우 O(n)이걸리지만 treemap의경우 O(n*log(n))이걸림_
- 하지만 insert가아닌 search를 고려한다면?

## 예상질문?
### AVL Tree vs Red-Black Tree
__'둘다 blanced tree인데 왜 자바와씨쁠은 avl이아닌 Red-black을사용했을까'__ 라는 의문이 들수있음
<br> 그이유는 rotation에드는 cost때문임
- AVL은 좌우 child의 depth차이가 2이상일경우 트리를 재배치함(=rotation) 
- AVL은RB에비해 balance를유지하기위한조건이좀더엄격함. 
<br> (AVL 최대 depth차-2, RB 최대 depth차 - log(n)/2)
- 따라서 search연산을실행할때에는 avl이 rb에비해 젤깊은leaf까지의 깊이가좀더작으므로 빠를수는있겠음.
<br> (AVL lookup-> 1.44xlog(n), RB lookup -> 2xlog(n))
- BUT balance를엄격하게유지하기위해 insert/delete할때 rotation하는횟수가 좀더많아짐
- RB의 경우 데이터가 랜덤하게 insert되어도 avl에비해 적고 균일한 횟수로 rotation이 일어난다고함

## 참조
[B Tree](http://blog.naver.com/PostView.nhn?blogId=eng_jisikin&logNo=220889188747&parentCategoryNo=&categoryNo=6&viewDate=&isShowPopularPosts=true&from=search)
<br>[Red-Black Tree](http://ddmix.blogspot.kr/2015/02/cppalgo-19-red-black-tree.html)
<br>[Red-Black Tree vs HashMap](http://hamait.tistory.com/413)
<br>[AVL Tree vs RB Tree](https://stackoverflow.com/questions/16257761/difference-between-red-black-trees-and-avl-trees)
<br>[2-3-4 TREE](http://booolean.tistory.com/406)
<br>[TreeMap vs HashMap - insertion](https://stackoverflow.com/questions/20487619/complexity-of-treemap-insertion-vs-hashmap-insertion)
