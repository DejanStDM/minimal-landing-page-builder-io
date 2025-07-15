/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow cross-origin requests from Builder.io preview domains
  allowedDevOrigins: ["*.fly.dev", "*.builder.io", "localhost", "127.0.0.1"],

  // Webpack configuration to handle HMR more gracefully
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = "eval-source-map";

      // Improve HMR reliability
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };

      // Disable webpack's HMR runtime in case of conflicts
      config.optimization = {
        ...config.optimization,
        moduleIds: "named",
      };

      // Add fallback for node modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },

  // Improve development server stability
  experimental: {},

  // Headers to handle CORS properly
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
