const { writeFileSync, mkdirSync } = require("fs");

require("dotenv").config();

const targetPath = "./src/environments/environment.ts";
const envFileContent = `
export const environment = {
news_key: "${process.env["NEWS_APIKEY"]}",
weather_key: "${process.env["WEATHER_APIKEY"]}"
}
`;

mkdirSync("./src/environments", { recursive: true });

writeFileSync(targetPath, envFileContent);
