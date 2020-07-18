import {Deserializable} from './deserializable.model';

export class Player implements Deserializable{
    public card_id: string;
    public mundane_name: string;
    public persona_name: string;
    public age: number;
    public notes: string;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
}
