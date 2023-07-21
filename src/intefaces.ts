export interface IRows {
    id: number,
    img: string,
    lastName: string,
    firstName: string | null,
    age?: number | null,
    phone: string,
    createdAt: string,
    status?: boolean,
    verified: boolean
}