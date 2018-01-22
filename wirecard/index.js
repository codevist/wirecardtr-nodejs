const ApiPlus = require("./ApiPlus");
const ProApi = require("./ProApi");
const SendInformationSmsService = require("./SendInformationSmsService");
const SelectSubscriber = require("./SelectSubscriber");
const SelectSubscriberDetail = require("./SelectSubscriberDetail");
const DeactivateSubscriber  = require("./DeactivateSubscriber");
const CCProxySale = require("./CCProxySale");
const WDTicketSale3DURLProxy = require("./WDTicketSale3DURLProxy");
const WDTicketSaleURLProxy = require("./WDTicketSaleURLProxy");
const MarketPlaceAddSubPartner = require("./MarketPlaceAddSubPartner");
const MarketPlaceUpdateSubPartner = require("./MarketPlaceUpdateSubPartner");
const MarketPlaceDeactiveSubPartner = require("./MarketPlaceDeactiveSubPartner");
const MarketPlaceSale3DSec = require("./MarketPlaceSale3DSec");
const MarketPlaceMpSale = require("./MarketPlaceMpSale");
const MarketPlaceReleasePayment = require("./MarketPlaceReleasePayment");

module.exports = { 
    ApiPlus:ApiPlus,
    ProApi:ProApi,
    SelectSubscriber:SelectSubscriber,
    SelectSubscriberDetail:SelectSubscriberDetail,
    DeactivateSubscriber : DeactivateSubscriber,
    CCProxySale : CCProxySale,
    WDTicketSale3DURLProxy : WDTicketSale3DURLProxy,
    WDTicketSaleURLProxy : WDTicketSaleURLProxy,
    MarketPlaceUpdateSubPartner : MarketPlaceUpdateSubPartner,
    MarketPlaceAddSubPartner : MarketPlaceAddSubPartner,
    SendInformationSmsService : SendInformationSmsService,
    MarketPlaceDeactiveSubPartner:MarketPlaceDeactiveSubPartner,
    MarketPlaceSale3DSec:MarketPlaceSale3DSec,
    MarketPlaceMpSale:MarketPlaceMpSale,
    MarketPlaceReleasePayment:MarketPlaceReleasePayment
}