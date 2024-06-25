import { IsString } from 'class-validator';
import { IUser } from '@school/interfaces';

export namespace AccountChangeProfile {
  export const topic = 'account.change-profile.command';

  export class Request {
    @IsString()
    user: Pick<IUser, 'displayName'> | undefined;

    @IsString()
    id: string | undefined;
  }

  export class Response {}
}
