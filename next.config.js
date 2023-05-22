/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // providing the locales supported by your application
    locales: ["EN", "FR", "NL"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "EN",
  },
};

module.exports = nextConfig;
