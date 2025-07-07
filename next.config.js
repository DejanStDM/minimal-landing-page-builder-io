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
      };
    }

    return config;
  },

  // Improve development server stability
  experimental: {
    turbo: false, // Disable Turbopack for better stability in Builder.io environment
  },

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
