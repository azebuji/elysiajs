import { Context } from "elysia"

export async function getOneCompany(context: Context) {
    return { company: "Empresa 1" }
}

export async function getAllCompanys(context: any) {
    console.log(context)


    return [{ company: "Empresa 1" }, { company: "Empresa 2" }]
}