// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

exports.handler = async (event) => {
  // const app = await NestFactory.createApplicationContext(AppModule);
  let body = JSON.parse(event.body);

  const product = body.num1 * body.num2;
  const response = {
    statusCode: 200,
    body:
      'The product of ' + body.num1 + ' and ' + body.num2 + ' is ' + product,
  };
  return response;
};
