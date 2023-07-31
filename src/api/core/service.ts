import {fetchRequest} from "@/api/core"

export class Service {
    constructor(
        public endpoint: string = "",
    ) {}

    public async list():Promise<any> {
        try {
            return await fetchRequest({
                point: `${this.endpoint}`,
                fetchMethod: "GET"
            })
        } catch (e) {
            console.log("Service GET list ERROR => ", e.message)
        }
    }

    public async create(payload: Record<string, any>):Promise<any> {
        try {
            return await fetchRequest({
                point: `${this.endpoint}`,
                payload,
                fetchMethod: "POST"
            })
        } catch (e) {
            console.log("Service GET create ERROR => ", e.message)
        }
    }

    public async update(id: number, payload: Record<string, any>):Promise<any> {
        try {
            return await fetchRequest({
                point: `${this.endpoint}/${id}`,
                payload,
                fetchMethod: "PUT"
            })
        } catch (e) {
            console.log("Service GET update ERROR => ", e.message)
        }
    }

    public async delete(id: number | string):Promise<any> {
        try {
            return await fetchRequest({
                point: `${this.endpoint}/${id}`,
                fetchMethod: "PUT"
            })
        } catch (e) {
            console.log("Service GET delete ERROR => ", e.message)
        }
    }

}