import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toEqual({
        "title": "Hello World v2. It\'s a version of API",
      });
    });

    it('should return "That\'s all folks, bye"', () => {
      expect(appController.getBy()).toEqual({
        "title": "That\'s all folks, bye v1. It\'s a new version of API",
      });
    });

    it('should return "Its is new route for API v2"', () => {
      expect(appController.getByV2()).toEqual({
        title: "Its is new route for API v2",
      });
    });
  });
});
