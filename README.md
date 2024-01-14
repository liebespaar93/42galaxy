This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Redux 

### 강좌

[![image](https://i.ytimg.com/vi/QZcYz2NrDIs/maxresdefault.jpg)](https://www.youtube.com/watch?v=QZcYz2NrDIs)

링크 : <https://www.youtube.com/watch?v=QZcYz2NrDIs>

### Tutorial for nextjs

[![image](https://redux.js.org/img/redux-logo-landscape.png)(https://redux.js.org/usage/nextjs)

링크 : <https://redux.js.org/usage/nextjs>

```Bash
npm i react-redux @reduxjs/toolkit
```


1. useSelector
> [!NOTE]
> 값을 가져올때 쓰는애
useSelector를 사용하여 스토어에 저장 되어 있는 데이터, state를 읽을 수 있도록 도와줍니다.
한마디로 useSelector의 결과물은 store.getState()했을 때의 결과물과 동일합니다.

2. useDispatch
> [!NOTE]
> 함수를 돌릴때 쓰는애
useDispatch는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
한마디로 액션을 리덕스 스토어에 발송, 전달을 도와주는 Hook입니다.

참조 링크 : <https://shape-coding.tistory.com/67> 

> [!NOTE]
> 자세히 사용법을 알고 싶으면
> `npx create-next-app --example with-redux my-app` 로  앱을 만들어 확인하라