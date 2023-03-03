export function prepareResponse(data: unknown): string {
    if ('message' in data) {
        console.log('Message in data: ', data.message)
    }
    return JSON.stringify(data)
}

console.log('Response is', prepareResponse({abc: 'test'}))