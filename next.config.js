const backendServer = process.env.NEXT_PUBLIC_API;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/public/:path*',
        destination: `${backendServer}/api/public/:path*`,
      },
    ];
  },
};
