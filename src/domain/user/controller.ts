import { Context } from "elysia"

export async function getOneUser(context: Context) {
    return { user: "Anderson" }
}

export async function getAllUsers(context: Context) {

    return [{ user: "Anderson" }, { user: "Maricon" }]
}