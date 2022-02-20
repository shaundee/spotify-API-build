This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# This spotify clone was made using the following technologies:
 * react 
 * nextjs 
 * tailwindcss 
 * nextjs12 
 * middleware 
 * spotify 
 * oauth 
 * nextauth 
 * reactjs 
 * recoil
 * api
 
 
#Installation

* For the app to function properly you will need to create a .env file within the root directory of the application. 
* Copy the code below into the .env file but with your own credentials that you get from https://developer.spotify.com/ 

NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_CLIENT_SECRET= 'Put your secret'
NEXT_PUBLIC_CLIENT_ID= 'Your Id'
JWT_SECRET= 'make up some super random value for e.g "987tdafgda76d626fd5fd2f"'


# Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
