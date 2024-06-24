import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { colors, formatColor } from './utils';

const PORT = process.env.APP_PORT;
const HOME_PAGE = process.env.HOME_PAGE;
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    const pid = '7777'.padStart(process.pid.toString().length, '7');

    const prefix =
      formatColor(`[Nest] ${pid}  - `, colors.fg.magenta) +
      `04.05.02 💗 12.01.02 ${''.padStart(5, ' ')}`;

    const suffix_home =
      formatColor(`LOG `, colors.fg.magenta) +
      formatColor(`[SEE.ME] `, colors.fg.yellow) +
      formatColor(`Server Started at 👉 `, colors.fg.magenta) +
      formatColor(HOME_PAGE, colors.fg.cyan);

    const suffix_graphql =
      formatColor(`LOG `, colors.fg.magenta) +
      formatColor(`[SEE.ME] `, colors.fg.yellow) +
      formatColor(`Access GraphQLModule at 👉 `, colors.fg.magenta) +
      formatColor(GRAPHQL_ENDPOINT, colors.fg.cyan);

    const lengthDash = 112;
    console.log(''.padStart(lengthDash, '-'));
    console.log(`${prefix} ${suffix_home}`);
    console.log(`${prefix} ${suffix_graphql}`);
    console.log(''.padStart(lengthDash, '-'));
  });
}
bootstrap();
