import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  async niceToSee(): Promise<string> {
    return 'Hey, nice to see you'
  }

  async sayHey(): Promise<string> {
    return 'How are you'
  }

  async sayBye(): Promise<string> {
    return 'See you soon'
  }
}
