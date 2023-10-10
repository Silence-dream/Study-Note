import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <div style="background:#000;width:100%;height:100%;color:#fff">
      你好
    </div>`;
  }
}
