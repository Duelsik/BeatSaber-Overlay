export class Tools {

    /////////////////////
    // PUBLIC FUNCTION //
    /////////////////////
    public async getMethod(URL: string): Promise<Object> {
        return await fetch(URL, {
            method: "GET"
        });
    }
}