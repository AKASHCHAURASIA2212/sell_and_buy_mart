// let api_url = "http://localhost:3000";
let api_url = "https://sell-and-buy-mart-backend.vercel.app";

export default api_url;


export function convertDateFormat(dateString) {
    let date = new Date(dateString);

    let day = date.getUTCDate();
    let month = date.getUTCMonth() + 1;
    let year = date.getUTCFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    return `${day}/${month}/${year}`;
}

export function convertDateTimeFormat(dateString) {
    let date = new Date(dateString);
    return `${String(date.getUTCDate()).padStart(2, '0')}/${String(date.getUTCMonth() + 1).padStart(2, '0')}/${date.getUTCFullYear()} ${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}:${String(date.getUTCSeconds()).padStart(2, '0')}`;
};


