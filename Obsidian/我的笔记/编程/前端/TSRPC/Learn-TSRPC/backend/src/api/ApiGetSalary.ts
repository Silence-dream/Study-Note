import { ApiCall } from "tsrpc";
import { ReqGetSalary, ResGetSalary } from "../shared/protocols/PtlGetSalary";

export default async function (call: ApiCall<ReqGetSalary, ResGetSalary>) {
  call.succ({
    resutlt: call.req.salart1 + call.req.salart2
  })
}