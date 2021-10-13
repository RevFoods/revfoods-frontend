import { Customer } from "./customer";
import { Supervisor } from "./supervisor";

export class Help {
   helpId: number;
   help: string;
   helpStatus: boolean;
   customer: Customer;
   supervisor: Supervisor;
}
