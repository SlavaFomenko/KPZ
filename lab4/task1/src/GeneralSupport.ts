import { Support } from '../interfaces'
import { AbstractSupportHandler } from './AbstractSupportHandler'

export class GeneralSupport extends AbstractSupportHandler implements Support {
  public handleRequest(request: string): string | null {
    return "Не вдалося знайти відповідний рівень підтримки. Будь ласка, зверніться до адміністратора.";
  }
}