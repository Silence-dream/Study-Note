import { ApiCall } from "tsrpc";
import { ReqGetSum, ResGetSum } from "../../shared/protocols/computed/PtlGetSum";

export default async function (call: ApiCall<ReqGetSum, ResGetSum>) {
    // TODO
    let num = call.req.num1+call.req.num2
    call.succ({
      sum:num
    })
}