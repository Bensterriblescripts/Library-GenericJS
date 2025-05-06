/* Settings */
let fadeDelay = 200

// Fade
async function fadeIn(element) {
    element.style.display = "block";
    await sleep(fadeDelay);
    element.style.opacity = "1";
}
async function fadeOut(element) {
    element.style.opacity = "0";
    await sleep(fadeDelay);
    element.style.display = "none";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Requests
async function jsonRequest(method, url, data, headers = []) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                headers
            },
            body: data
        });

        const responseData = await response.json();
        const returnResponse = {
            success: true,
            data: responseData,
            message: ""
        }
        return returnResponse;
    } 
    catch (error) {
        const returnResponse = {
            success: false,
            data: Object.create,
            message: "jsonRequest Error: " + error
        }
        return returnResponse;
    }
}
