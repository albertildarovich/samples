const isProduction = process.env.NODE_ENV === `production`;
const RELATIONSHIPSARRAY = [`mother`, `father`, `heir`, `spouse`, `allegiance`];

export { isProduction, RELATIONSHIPSARRAY };
