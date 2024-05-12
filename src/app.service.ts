import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.parse('{"title": "Hello World v2. It\'s a version of API"}');
  }

  getBy(): string {
    return JSON.parse(
      '{"title": "That\'s all folks, bye v1. It\'s a new version of API"}',
    );
  }

  getByV2(): string {
    return JSON.parse(
      '{"title": "Its is new route for API v2"}',
    );
  }
}
