const settings = {
    userCode : process.env.WIRECARD_USER_CODE || "20923",

    pin : process.env.WIRECARD_PIN || "535D7D1B5DA6407EB7F6",

    
    baseURL : process.env.WIRECARD_BASE_URL || "https://www.wirecard.com.tr/SGate/Gate",

}

function errorHandler(text){
    const textColor = '\x1b[36m%s\x1b[0m';
    throw new Error(text, textColor)
}

if(!settings.userCode) return errorHandler("userCode bulunamadı! Lütfen settings.js dosyasını düzenleyiniz...");
if(!settings.pin) return errorHandler("pin bulunamadı! Lütfen settings.js dosyasını düzenleyiniz...");
if(!settings.baseURL) return errorHandler("base url bulunamadı. Lütfen settings.js dosyasını düzenleyiniz...");


module.exports = settings
