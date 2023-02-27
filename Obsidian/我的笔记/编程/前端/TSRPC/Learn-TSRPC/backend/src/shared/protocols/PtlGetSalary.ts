import { BaseRequest, BaseResponse, BaseConf } from "./base";

export interface ReqGetSalary extends BaseRequest {
  salart1: number;
  salart2: number;
}

export interface ResGetSalary extends BaseResponse {
  resutlt: number
}

export const conf: BaseConf = {

}