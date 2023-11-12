export const jsonContentType = (methodType: string, data: object) => {
    return {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
}
// export const cookieContentType = (methodType: string, data: object) => {
//     return {
//         method: methodType,
//         credentials:'include',
//           headers: {
//              'Access-Control-Allow-Credentials': true,
//              Cookie: context.req.headers.cookie
//           },
//         body: JSON.stringify(data),
//     }
// }
