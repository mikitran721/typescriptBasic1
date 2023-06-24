# GA GAY

- khoi tao package.json: npm init -y (tu tao thi dung: npm init)
- cai dat typescript global: npm i -g typescript
- tao file js tuong ung file ts: tsc index <tenfile>
- tao file luon render lai khi thay doi file ts: tsc -w index
- mo them terminal: ctrl + shift + 5;
- cai dat nodemon (thong dich/compile file TS): npm i --save-dev nodemon
- them dong lenh vao package.json:
  [script] "watch":"nodemon index" //no se tu compile file index.js (tu chay)
- Khoi tao tsconfig.json: npx tsc --init
  (co file nay, cho TS kiem tra loi manh me hon xua kkk)
-

# NOI DUNG HAY:

- type alias
- function signature
- optionnal with NONNULL (dau !); vd: const addNonNull = (a:number,b?:number) => a + b!;
- constructor cho class don gian & nhanh. vd:
  constructor(
  public name:string,
  private age:number,
  readonly male:boolean,
  ){}
