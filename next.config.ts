import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
   // output: "export",
   // images: { unoptimized: true },
   trailingSlash: true,
   eslint: {
      ignoreDuringBuilds: true,
   },
   typescript: {
      ignoreBuildErrors: true,
   },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
