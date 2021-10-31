import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World From Inside The Container with Binded Mount! \n Now, if it works on your machine, it works everywhere!';
  }
}
