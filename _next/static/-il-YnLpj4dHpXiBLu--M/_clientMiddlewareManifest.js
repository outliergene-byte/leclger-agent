self.__MIDDLEWARE_MATCHERS = [{
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/pages\\/referral-program(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/pages/referral-program"
    },
    {
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/pages\\/ledger-wallet(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/pages/ledger-wallet"
    },
    {
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/pages\\/staking(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/pages/staking"
    },
    {
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/pages\\/buy(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/pages/buy"
    },
    {
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/pages\\/swap(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/pages/swap"
    },
    {
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/pages\\/unlock-ledger-wallet-desktop(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/pages/unlock-ledger-wallet-desktop"
    },
    {
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/pages\\/unlock-ledger-wallet-mobile(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/pages/unlock-ledger-wallet-mobile"
    },
    {
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/ledger-nano-gen5\\/buy(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/ledger-nano-gen5/buy"
    },
    {
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/ledger-flex\\/buy(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/ledger-flex/buy"
    },
    {
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/pages\\/ledger-nano-gen5(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/pages/ledger-nano-gen5"
    },
    {
        "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/)[^/.]{1,}))\\/pages\\/march-2026-added-value-promo(\\\\.json)?[\\/#\\?]?$",
        "originalSource": "/pages/march-2026-added-value-promo"
    }
];
self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()