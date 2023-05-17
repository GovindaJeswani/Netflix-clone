
# Netflix Clone

## Getting Started

### 1: First [clone](https://github.com/GovindaJeswani/Netflix-clone.git)
 
 then use 
 
```bash
npm install 
```
this is going to install all the dependences that required for project.

### 2: Now create .env.local file in your project directory with following variables


```bash
NEXT_PUBLIC_HASURA_ADMIN_URL = (YOUR_HASURA_ADMIN_URL)

JWT_SECRET = (YOUR_JWT_SECRET)

NEXT_PUBLIC_HASURA_ADMIN_SECRET = (YOUR_HASURA_ADMIN_SECRET)

MAGIC_SERVER_KEY = (MAGIC_SERVER_KEY)

NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY = (YOUR_MAGIC_PUBLISHABLE_KEY)

NEXT_PUBLIC_STRIPE_SECRET_KEY = (YOUR_STRIPE_SECRET_KEY)


NEXT_PUBLIC_STRIPE_PUBLIC_KEY = (STRIPE_PUBLIC_KEY)

YOUTUBE_API_KEY = (YOUR_YOUTUBE_API_KEY)

```
You have to register yourself in following account and then get all those key and replace here !!!

### 3.  Now you have to execute this command

 run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


###  Key features

	Using Next-Js and PostgreSql 
	Passwordless Authentication : with [magic sdk](https://magic.link/docs/home/welcome)
	User Authentication & Registration : with [hasura](https://hasura.io/)
	Query with GraphQL API
	Videos from Youtube API
	

### To-do
	integeration of payment based on subscription plan
	Extra features on video player

  
## Learn More
	Demo [Demo](https://github.com/GovindaJeswani/Netflix-clone/deployments/activity_log?environment=Production)


To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
