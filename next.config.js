/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "i.ytimg.com"],
  },
};

// module.exports = {
//   env: {
//     NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
//     STRIPE_SECRET_KEY: 'sk_test_51N5N3HSFRmrn6FpUrylDUsXXKf5jTXF6qokuvfz51NjqxpMxZGeM2zUbDBV6ysGrqRgCx3BYgcgghRoJDbfcrnQO00QyLFvsz3',
//     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: 'pk_test_51N5N3HSFRmrn6FpUA58LeW7zRdYFCUTqimyQB5Y0nnZaay7VNVHHdRHyl2RZI3rrtzwlGDYGlXeOBKnyHrHxT3SM009PwzQwYb',
//   },
// };


module.exports = nextConfig;
