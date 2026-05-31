import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/marsada-uph",
        destination:
          "https://drive.google.com/drive/folders/1pzaP4dMcxzXxGZ_msXGhtHN_p5q4u2tg?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
