import { ServiceProto } from 'tsrpc-proto';
import { ReqAddData, ResAddData } from './PtlAddData';
import { ReqGetData, ResGetData } from './PtlGetData';
import { ReqGetSalary, ResGetSalary } from './PtlGetSalary';

export interface ServiceType {
    api: {
        "AddData": {
            req: ReqAddData,
            res: ResAddData
        },
        "GetData": {
            req: ReqGetData,
            res: ResGetData
        },
        "GetSalary": {
            req: ReqGetSalary,
            res: ResGetSalary
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 3,
    "services": [
        {
            "id": 0,
            "name": "AddData",
            "type": "api"
        },
        {
            "id": 1,
            "name": "GetData",
            "type": "api"
        },
        {
            "id": 3,
            "name": "GetSalary",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "PtlAddData/ReqAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddData/ResAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlGetData/ReqGetData": {
            "type": "Interface"
        },
        "PtlGetData/ResGetData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "time",
                                    "type": {
                                        "type": "Date"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "PtlGetSalary/ReqGetSalary": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "salart1",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "salart2",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface"
        },
        "PtlGetSalary/ResGetSalary": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "resutlt",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        }
    }
};