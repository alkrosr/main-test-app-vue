import { Service } from "@/api/core/service";
import { SERVICE_POINT_NAME } from "../service-config";

const POINT_NAME = `${SERVICE_POINT_NAME}/users`;
const service = new Service(`${POINT_NAME}`);

export default service;

export const getUsers = service.list.bind(service);
export const updateUserById = service.update.bind(service);
export const createUser = service.create.bind(service);
export const deleteUser = service.delete.bind(service);