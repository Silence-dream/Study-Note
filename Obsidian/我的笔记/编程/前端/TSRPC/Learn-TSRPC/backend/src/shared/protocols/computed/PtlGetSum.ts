import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGetSum extends BaseRequest {
    num1:number
    num2:number
}

export interface ResGetSum extends BaseResponse {
    sum:number
}

export const conf: BaseConf = {
    
}