const backendServer = process.env.NEXT_PUBLIC_API;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/public/:path*',
        destination: `${backendServer}/public/:path*`,
      },
    ];
  },
};
