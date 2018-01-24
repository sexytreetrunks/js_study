레드블랙트리
BST(이진탐색트리)
: 왼 < root < 오
: 삽입 순서에따라 트리모양 비대칭
-> B-Tree
: make it balanced!
: 가질수 있는 자식노드의 최소, 최대가 정해져있는 tree.
 && 하나의 노드는 2개 이상의 값을 가질수 있음
: 항목이 삽입되거나 삭제될 때, 내부 노드는 해당 범위의 자식 노드의 수를 만족시키기 위해 분리되거나 혹은 다른 노드와 합쳐지게 된다. 
(그림설명)
-> 2-3 tree와 2-3-4tree
: 2-3과 2-3-4는 트리가 가질수있는 child개수를 뜻함. 
2노드:  1개의 값과 2개의 child노드를 가질수 있음.
3노드: 2개의 값과 3개의 child노드를 가질수있음.
즉 2-3트리는 2,3개의 child를 가질수있고, 2-3-4트리는 2,3,4개의 child를 가질수있음. 이름에서 짐작할수있듯 얘네는 child노드를 1개만 가질수 없음. 
어? 그럼 노드를 삽입했을때 child노드가 1개일수있자나여 그럼 어케 함? --> child노드를 새로 만들지않고 기존 노드에 데이터를 추가해 버려여. 
참고로 추가할때 그냥 생각없이 추가하는거 아님. 기존노드에 데이터를 추가할때도 BST조건을 만족시켜야해여.
그럼 child노드 새로 만들어야 할때마다 노드에 데이터 추가시켜도 되나여? --> ㄴㄴ. 노드가 품을수 있는 최대 데이터수는 '최대child수 -1'개 입니다. 
글고 노드안의 데이터는 정렬된 상태로 있어야하기 때문에 무한정 추가하게 해놨다간 depth는 많이 줄겠지만 매번 정렬하는데 비용이 늘어나겠쪄?

-> Red Black tree
2-3-4 tree를 이진트리형태로 구현한 tree


[B Tree](http://blog.naver.com/PostView.nhn?blogId=eng_jisikin&logNo=220889188747&parentCategoryNo=&categoryNo=6&viewDate=&isShowPopularPosts=true&from=search)
[Red-Black Tree](http://ddmix.blogspot.kr/2015/02/cppalgo-19-red-black-tree.html)
[Red-Black Tree vs HashMap]
(http://hamait.tistory.com/413)
[AVL Tree vs RB Tree](https://stackoverflow.com/questions/16257761/difference-between-red-black-trees-and-avl-trees)
[AVL Tree vs RB Tree - 한글](https://kldp.org/node/3175)
[AVL Tree](https://ratsgo.github.io/data%20structure&algorithm/2017/10/27/avltree/)
http://pigbrain.github.io/datastructure/2016/02/06/AVLTree_on_DataStructure
234TREE http://booolean.tistory.com/406
