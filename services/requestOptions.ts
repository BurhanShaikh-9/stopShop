export const jsonContentType = (methodType: string, data: object) => {
    return {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
}
