(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 761420, e => {
    "use strict";
    let t, a;
    e.i(350461);
    var n, r = e.i(391398),
        i = e.i(191788);
    e.i(522847);
    t = Object.assign({}, ...Object.keys((n = {
        scalars: [8, 18, 19, 24, 34, 56, 66, 107, 112, 113, 123, 126, 128, 129, 131, 148, 156, 157, 160, 161, 162, 165, 168, 169, 175, 176, 178, 186, 189, 190, 193, 198, 199, 201, 207, 216, 218, 221, 225, 228, 236, 251, 254, 255, 259, 264, 267, 269, 270, 275, 279, 280, 285, 286, 293, 301, 306, 307, 308, 309, 320, 331, 340, 342, 349, 373, 377, 381, 390, 392, 393, 394, 395, 401, 405],
        types: {
            ApiVersion: {
                displayName: [377],
                handle: [377],
                supported: [19],
                __typename: [377]
            },
            ApplePayWalletContentInput: {
                billingAddress: [211],
                data: [377],
                header: [2],
                lastDigits: [377],
                signature: [377],
                version: [377],
                __typename: [377]
            },
            ApplePayWalletHeaderInput: {
                applicationData: [377],
                ephemeralPublicKey: [377],
                publicKeyHash: [377],
                transactionId: [377],
                __typename: [377]
            },
            AppliedGiftCard: {
                amountUsed: [246],
                amountUsedV2: [246],
                balance: [246],
                balanceV2: [246],
                id: [189],
                lastCharacters: [377],
                presentmentAmountUsed: [246],
                __typename: [377]
            },
            Article: {
                author: [5],
                authorV2: [5],
                blog: [15],
                comments: [116, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                content: [377, {
                    truncateAt: [198]
                }],
                contentHtml: [186],
                excerpt: [377, {
                    truncateAt: [198]
                }],
                excerptHtml: [186],
                handle: [377],
                id: [189],
                image: [191],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                onlineStoreUrl: [390],
                publishedAt: [156],
                seo: [299],
                tags: [377],
                title: [377],
                trackingParameters: [377],
                __typename: [377]
            },
            ArticleAuthor: {
                bio: [377],
                email: [377],
                firstName: [377],
                lastName: [377],
                name: [377],
                __typename: [377]
            },
            ArticleConnection: {
                edges: [7],
                nodes: [4],
                pageInfo: [263],
                __typename: [377]
            },
            ArticleEdge: {
                cursor: [377],
                node: [4],
                __typename: [377]
            },
            ArticleSortKeys: {},
            Attribute: {
                key: [377],
                value: [377],
                __typename: [377]
            },
            AttributeInput: {
                key: [377],
                value: [377],
                __typename: [377]
            },
            AutomaticDiscountApplication: {
                allocationMethod: [165],
                targetSelection: [168],
                targetType: [169],
                title: [377],
                value: [273],
                __typename: [377]
            },
            BaseCartLine: {
                attribute: [9, {
                    key: [377, "String!"]
                }],
                attributes: [9],
                cost: [74],
                discountAllocations: [62],
                estimatedCost: [75],
                id: [189],
                merchandise: [226],
                quantity: [198],
                sellingPlanAllocation: [313],
                on_CartLine: [73],
                on_ComponentizableCartLine: [124],
                __typename: [377]
            },
            BaseCartLineConnection: {
                edges: [14],
                nodes: [12],
                pageInfo: [263],
                __typename: [377]
            },
            BaseCartLineEdge: {
                cursor: [377],
                node: [12],
                __typename: [377]
            },
            Blog: {
                articleByHandle: [4, {
                    handle: [377, "String!"]
                }],
                articles: [6, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [8],
                    query: [377]
                }],
                authors: [5],
                handle: [377],
                id: [189],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                onlineStoreUrl: [390],
                seo: [299],
                title: [377],
                __typename: [377]
            },
            BlogConnection: {
                edges: [17],
                nodes: [15],
                pageInfo: [263],
                __typename: [377]
            },
            BlogEdge: {
                cursor: [377],
                node: [15],
                __typename: [377]
            },
            BlogSortKeys: {},
            Boolean: {},
            Brand: {
                colors: [22],
                coverImage: [219],
                logo: [219],
                shortDescription: [377],
                slogan: [377],
                squareLogo: [219],
                __typename: [377]
            },
            BrandColorGroup: {
                background: [113],
                foreground: [113],
                __typename: [377]
            },
            BrandColors: {
                primary: [21],
                secondary: [21],
                __typename: [377]
            },
            BuyerInput: {
                customerAccessToken: [377],
                companyLocationId: [189],
                __typename: [377]
            },
            CardBrand: {},
            Cart: {
                appliedGiftCards: [3],
                attribute: [9, {
                    key: [377, "String!"]
                }],
                attributes: [9],
                buyerIdentity: [31],
                checkoutUrl: [390],
                cost: [42],
                createdAt: [156],
                delivery: [45],
                deliveryGroups: [54, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    withCarrierRates: [19]
                }],
                discountAllocations: [62],
                discountCodes: [64],
                estimatedCost: [67],
                id: [189],
                lines: [13, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                note: [377],
                totalQuantity: [198],
                updatedAt: [156],
                __typename: [377]
            },
            CartAddress: {
                on_CartDeliveryAddress: [46],
                __typename: [377]
            },
            CartAddressInput: {
                deliveryAddress: [47],
                copyFromCustomerAddressId: [189],
                __typename: [377]
            },
            CartAttributesUpdatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartAutomaticDiscountAllocation: {
                discountApplication: [63],
                discountedAmount: [246],
                targetType: [169],
                title: [377],
                __typename: [377]
            },
            CartBillingAddressUpdatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartBuyerIdentity: {
                countryCode: [128],
                customer: [132],
                deliveryAddressPreferences: [158],
                email: [377],
                phone: [377],
                preferences: [89],
                purchasingCompany: [294],
                __typename: [377]
            },
            CartBuyerIdentityInput: {
                email: [377],
                phone: [377],
                companyLocationId: [189],
                countryCode: [128],
                customerAccessToken: [377],
                preferences: [90],
                __typename: [377]
            },
            CartBuyerIdentityUpdatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartCardSource: {},
            CartCodeDiscountAllocation: {
                code: [377],
                discountApplication: [63],
                discountedAmount: [246],
                targetType: [169],
                __typename: [377]
            },
            CartCompletionAction: {
                on_CompletePaymentChallenge: [121],
                __typename: [377]
            },
            CartCompletionActionRequired: {
                action: [36],
                id: [377],
                __typename: [377]
            },
            CartCompletionAttemptResult: {
                on_CartCompletionActionRequired: [37],
                on_CartCompletionFailed: [39],
                on_CartCompletionProcessing: [40],
                on_CartCompletionSuccess: [41],
                __typename: [377]
            },
            CartCompletionFailed: {
                errors: [122],
                id: [377],
                __typename: [377]
            },
            CartCompletionProcessing: {
                id: [377],
                pollDelay: [198],
                __typename: [377]
            },
            CartCompletionSuccess: {
                completedAt: [156],
                id: [377],
                orderId: [189],
                orderUrl: [390],
                __typename: [377]
            },
            CartCost: {
                checkoutChargeAmount: [246],
                subtotalAmount: [246],
                subtotalAmountEstimated: [19],
                totalAmount: [246],
                totalAmountEstimated: [19],
                totalDutyAmount: [246],
                totalDutyAmountEstimated: [19],
                totalTaxAmount: [246],
                totalTaxAmountEstimated: [19],
                __typename: [377]
            },
            CartCreatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartCustomDiscountAllocation: {
                discountApplication: [63],
                discountedAmount: [246],
                targetType: [169],
                title: [377],
                __typename: [377]
            },
            CartDelivery: {
                addresses: [94, {
                    selected: [19]
                }],
                __typename: [377]
            },
            CartDeliveryAddress: {
                address1: [377],
                address2: [377],
                city: [377],
                company: [377],
                countryCode: [377],
                firstName: [377],
                formatted: [377, {
                    withName: [19],
                    withCompany: [19]
                }],
                formattedArea: [377],
                lastName: [377],
                latitude: [178],
                longitude: [178],
                name: [377],
                phone: [377],
                provinceCode: [377],
                zip: [377],
                __typename: [377]
            },
            CartDeliveryAddressInput: {
                address1: [377],
                address2: [377],
                city: [377],
                company: [377],
                countryCode: [128],
                firstName: [377],
                lastName: [377],
                phone: [377],
                provinceCode: [377],
                zip: [377],
                __typename: [377]
            },
            CartDeliveryAddressesAddPayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartDeliveryAddressesRemovePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartDeliveryAddressesUpdatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartDeliveryCoordinatesPreference: {
                countryCode: [128],
                latitude: [178],
                longitude: [178],
                __typename: [377]
            },
            CartDeliveryCoordinatesPreferenceInput: {
                latitude: [178],
                longitude: [178],
                countryCode: [128],
                __typename: [377]
            },
            CartDeliveryGroup: {
                cartLines: [13, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                deliveryAddress: [208],
                deliveryOptions: [58],
                groupType: [56],
                id: [189],
                selectedDeliveryOption: [58],
                __typename: [377]
            },
            CartDeliveryGroupConnection: {
                edges: [55],
                nodes: [53],
                pageInfo: [263],
                __typename: [377]
            },
            CartDeliveryGroupEdge: {
                cursor: [377],
                node: [53],
                __typename: [377]
            },
            CartDeliveryGroupType: {},
            CartDeliveryInput: {
                addresses: [95],
                __typename: [377]
            },
            CartDeliveryOption: {
                code: [377],
                deliveryMethodType: [161],
                description: [377],
                estimatedCost: [246],
                handle: [377],
                title: [377],
                __typename: [377]
            },
            CartDeliveryPreference: {
                coordinates: [51],
                deliveryMethod: [270],
                pickupHandle: [377],
                __typename: [377]
            },
            CartDeliveryPreferenceInput: {
                deliveryMethod: [270],
                pickupHandle: [377],
                coordinates: [52],
                __typename: [377]
            },
            CartDirectPaymentMethodInput: {
                billingAddress: [211],
                sessionId: [377],
                cardSource: [34],
                acceptedSubscriptionTerms: [19],
                __typename: [377]
            },
            CartDiscountAllocation: {
                discountApplication: [63],
                discountedAmount: [246],
                targetType: [169],
                on_CartAutomaticDiscountAllocation: [29],
                on_CartCodeDiscountAllocation: [35],
                on_CartCustomDiscountAllocation: [44],
                __typename: [377]
            },
            CartDiscountApplication: {
                allocationMethod: [165],
                targetSelection: [168],
                targetType: [169],
                value: [273],
                __typename: [377]
            },
            CartDiscountCode: {
                applicable: [19],
                code: [377],
                __typename: [377]
            },
            CartDiscountCodesUpdatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartErrorCode: {},
            CartEstimatedCost: {
                checkoutChargeAmount: [246],
                subtotalAmount: [246],
                totalAmount: [246],
                totalDutyAmount: [246],
                totalTaxAmount: [246],
                __typename: [377]
            },
            CartFreePaymentMethodInput: {
                billingAddress: [211],
                __typename: [377]
            },
            CartGiftCardCodesRemovePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartGiftCardCodesUpdatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartInput: {
                attributes: [10],
                lines: [76],
                discountCodes: [377],
                giftCardCodes: [377],
                note: [377],
                buyerIdentity: [32],
                delivery: [57],
                metafields: [72],
                __typename: [377]
            },
            CartInputMetafieldInput: {
                key: [377],
                value: [377],
                type: [377],
                __typename: [377]
            },
            CartLine: {
                attribute: [9, {
                    key: [377, "String!"]
                }],
                attributes: [9],
                cost: [74],
                discountAllocations: [62],
                estimatedCost: [75],
                id: [189],
                merchandise: [226],
                quantity: [198],
                sellingPlanAllocation: [313],
                __typename: [377]
            },
            CartLineCost: {
                amountPerQuantity: [246],
                compareAtAmountPerQuantity: [246],
                subtotalAmount: [246],
                totalAmount: [246],
                __typename: [377]
            },
            CartLineEstimatedCost: {
                amount: [246],
                compareAtAmount: [246],
                subtotalAmount: [246],
                totalAmount: [246],
                __typename: [377]
            },
            CartLineInput: {
                attributes: [10],
                quantity: [198],
                merchandiseId: [189],
                sellingPlanId: [189],
                __typename: [377]
            },
            CartLineUpdateInput: {
                id: [189],
                quantity: [198],
                merchandiseId: [189],
                attributes: [10],
                sellingPlanId: [189],
                __typename: [377]
            },
            CartLinesAddPayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartLinesRemovePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartLinesUpdatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartMetafieldDeleteInput: {
                ownerId: [189],
                key: [377],
                __typename: [377]
            },
            CartMetafieldDeletePayload: {
                deletedId: [189],
                userErrors: [229],
                __typename: [377]
            },
            CartMetafieldsSetInput: {
                ownerId: [189],
                key: [377],
                value: [377],
                type: [377],
                __typename: [377]
            },
            CartMetafieldsSetPayload: {
                metafields: [227],
                userErrors: [235],
                __typename: [377]
            },
            CartNoteUpdatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartOperationError: {
                code: [377],
                message: [377],
                __typename: [377]
            },
            CartPaymentInput: {
                amount: [245],
                sourceIdentifier: [377],
                freePaymentMethod: [68],
                directPaymentMethod: [61],
                walletPaymentMethod: [105],
                __typename: [377]
            },
            CartPaymentUpdatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartPreferences: {
                delivery: [59],
                wallet: [377],
                __typename: [377]
            },
            CartPreferencesInput: {
                delivery: [60],
                wallet: [377],
                __typename: [377]
            },
            CartPrepareForCompletionPayload: {
                result: [92],
                userErrors: [104],
                __typename: [377]
            },
            CartPrepareForCompletionResult: {
                on_CartStatusNotReady: [99],
                on_CartStatusReady: [100],
                on_CartThrottled: [103],
                __typename: [377]
            },
            CartRemovePersonalDataPayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartSelectableAddress: {
                address: [26],
                id: [189],
                oneTimeUse: [19],
                selected: [19],
                __typename: [377]
            },
            CartSelectableAddressInput: {
                address: [27],
                selected: [19],
                oneTimeUse: [19],
                validationStrategy: [160],
                __typename: [377]
            },
            CartSelectableAddressUpdateInput: {
                id: [189],
                address: [27],
                selected: [19],
                oneTimeUse: [19],
                validationStrategy: [160],
                __typename: [377]
            },
            CartSelectedDeliveryOptionInput: {
                deliveryGroupId: [189],
                deliveryOptionHandle: [377],
                __typename: [377]
            },
            CartSelectedDeliveryOptionsUpdatePayload: {
                cart: [25],
                userErrors: [104],
                warnings: [106],
                __typename: [377]
            },
            CartStatusNotReady: {
                cart: [25],
                errors: [86],
                __typename: [377]
            },
            CartStatusReady: {
                cart: [25],
                __typename: [377]
            },
            CartSubmitForCompletionPayload: {
                result: [102],
                userErrors: [104],
                __typename: [377]
            },
            CartSubmitForCompletionResult: {
                on_SubmitAlreadyAccepted: [382],
                on_SubmitFailed: [383],
                on_SubmitSuccess: [384],
                on_SubmitThrottled: [385],
                __typename: [377]
            },
            CartThrottled: {
                cart: [25],
                pollAfter: [156],
                __typename: [377]
            },
            CartUserError: {
                code: [66],
                field: [377],
                message: [377],
                __typename: [377]
            },
            CartWalletPaymentMethodInput: {
                applePayWalletContent: [1],
                shopPayWalletContent: [365],
                __typename: [377]
            },
            CartWarning: {
                code: [107],
                message: [377],
                target: [189],
                __typename: [377]
            },
            CartWarningCode: {},
            CategoryFilter: {
                id: [377],
                __typename: [377]
            },
            Collection: {
                description: [377, {
                    truncateAt: [198]
                }],
                descriptionHtml: [186],
                handle: [377],
                id: [189],
                image: [191],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                onlineStoreUrl: [390],
                products: [276, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [275],
                    filters: [278, "[ProductFilter!]"]
                }],
                seo: [299],
                title: [377],
                trackingParameters: [377],
                updatedAt: [156],
                __typename: [377]
            },
            CollectionConnection: {
                edges: [111],
                nodes: [109],
                pageInfo: [263],
                totalCount: [395],
                __typename: [377]
            },
            CollectionEdge: {
                cursor: [377],
                node: [109],
                __typename: [377]
            },
            CollectionSortKeys: {},
            Color: {},
            Comment: {
                author: [115],
                content: [377, {
                    truncateAt: [198]
                }],
                contentHtml: [186],
                id: [189],
                __typename: [377]
            },
            CommentAuthor: {
                email: [377],
                name: [377],
                __typename: [377]
            },
            CommentConnection: {
                edges: [117],
                nodes: [114],
                pageInfo: [263],
                __typename: [377]
            },
            CommentEdge: {
                cursor: [377],
                node: [114],
                __typename: [377]
            },
            Company: {
                createdAt: [156],
                externalId: [377],
                id: [189],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                name: [377],
                updatedAt: [156],
                __typename: [377]
            },
            CompanyContact: {
                createdAt: [156],
                id: [189],
                locale: [377],
                title: [377],
                updatedAt: [156],
                __typename: [377]
            },
            CompanyLocation: {
                createdAt: [156],
                externalId: [377],
                id: [189],
                locale: [377],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                name: [377],
                updatedAt: [156],
                __typename: [377]
            },
            CompletePaymentChallenge: {
                redirectUrl: [390],
                __typename: [377]
            },
            CompletionError: {
                code: [123],
                message: [377],
                __typename: [377]
            },
            CompletionErrorCode: {},
            ComponentizableCartLine: {
                attribute: [9, {
                    key: [377, "String!"]
                }],
                attributes: [9],
                cost: [74],
                discountAllocations: [62],
                estimatedCost: [75],
                id: [189],
                lineComponents: [73],
                merchandise: [226],
                quantity: [198],
                sellingPlanAllocation: [313],
                __typename: [377]
            },
            Count: {
                count: [198],
                precision: [126],
                __typename: [377]
            },
            CountPrecision: {},
            Country: {
                availableLanguages: [200],
                currency: [130],
                defaultLanguage: [200],
                isoCode: [128],
                market: [213],
                name: [377],
                unitSystem: [394],
                __typename: [377]
            },
            CountryCode: {},
            CropRegion: {},
            Currency: {
                isoCode: [131],
                name: [377],
                symbol: [377],
                __typename: [377]
            },
            CurrencyCode: {},
            Customer: {
                acceptsMarketing: [19],
                addresses: [209, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                createdAt: [156],
                defaultAddress: [208],
                displayName: [377],
                email: [377],
                firstName: [377],
                id: [189],
                lastName: [377],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                numberOfOrders: [395],
                orders: [252, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [259],
                    query: [377]
                }],
                phone: [377],
                tags: [377],
                updatedAt: [156],
                __typename: [377]
            },
            CustomerAccessToken: {
                accessToken: [377],
                expiresAt: [156],
                __typename: [377]
            },
            CustomerAccessTokenCreateInput: {
                email: [377],
                password: [377],
                __typename: [377]
            },
            CustomerAccessTokenCreatePayload: {
                customerAccessToken: [133],
                customerUserErrors: [155],
                userErrors: [399],
                __typename: [377]
            },
            CustomerAccessTokenCreateWithMultipassPayload: {
                customerAccessToken: [133],
                customerUserErrors: [155],
                __typename: [377]
            },
            CustomerAccessTokenDeletePayload: {
                deletedAccessToken: [377],
                deletedCustomerAccessTokenId: [377],
                userErrors: [399],
                __typename: [377]
            },
            CustomerAccessTokenRenewPayload: {
                customerAccessToken: [133],
                userErrors: [399],
                __typename: [377]
            },
            CustomerActivateByUrlPayload: {
                customer: [132],
                customerAccessToken: [133],
                customerUserErrors: [155],
                __typename: [377]
            },
            CustomerActivateInput: {
                activationToken: [377],
                password: [377],
                __typename: [377]
            },
            CustomerActivatePayload: {
                customer: [132],
                customerAccessToken: [133],
                customerUserErrors: [155],
                userErrors: [399],
                __typename: [377]
            },
            CustomerAddressCreatePayload: {
                customerAddress: [208],
                customerUserErrors: [155],
                userErrors: [399],
                __typename: [377]
            },
            CustomerAddressDeletePayload: {
                customerUserErrors: [155],
                deletedCustomerAddressId: [377],
                userErrors: [399],
                __typename: [377]
            },
            CustomerAddressUpdatePayload: {
                customerAddress: [208],
                customerUserErrors: [155],
                userErrors: [399],
                __typename: [377]
            },
            CustomerCreateInput: {
                firstName: [377],
                lastName: [377],
                email: [377],
                phone: [377],
                password: [377],
                acceptsMarketing: [19],
                __typename: [377]
            },
            CustomerCreatePayload: {
                customer: [132],
                customerUserErrors: [155],
                userErrors: [399],
                __typename: [377]
            },
            CustomerDefaultAddressUpdatePayload: {
                customer: [132],
                customerUserErrors: [155],
                userErrors: [399],
                __typename: [377]
            },
            CustomerErrorCode: {},
            CustomerRecoverPayload: {
                customerUserErrors: [155],
                userErrors: [399],
                __typename: [377]
            },
            CustomerResetByUrlPayload: {
                customer: [132],
                customerAccessToken: [133],
                customerUserErrors: [155],
                userErrors: [399],
                __typename: [377]
            },
            CustomerResetInput: {
                resetToken: [377],
                password: [377],
                __typename: [377]
            },
            CustomerResetPayload: {
                customer: [132],
                customerAccessToken: [133],
                customerUserErrors: [155],
                userErrors: [399],
                __typename: [377]
            },
            CustomerUpdateInput: {
                firstName: [377],
                lastName: [377],
                email: [377],
                phone: [377],
                password: [377],
                acceptsMarketing: [19],
                __typename: [377]
            },
            CustomerUpdatePayload: {
                customer: [132],
                customerAccessToken: [133],
                customerUserErrors: [155],
                userErrors: [399],
                __typename: [377]
            },
            CustomerUserError: {
                code: [148],
                field: [377],
                message: [377],
                __typename: [377]
            },
            DateTime: {},
            Decimal: {},
            DeliveryAddress: {
                on_MailingAddress: [208],
                on_Node: [248],
                __typename: [377]
            },
            DeliveryAddressInput: {
                deliveryAddress: [211],
                oneTimeUse: [19],
                deliveryAddressValidationStrategy: [160],
                customerAddressId: [189],
                __typename: [377]
            },
            DeliveryAddressValidationStrategy: {},
            DeliveryMethodType: {},
            DigitalWallet: {},
            DiscountAllocation: {
                allocatedAmount: [246],
                discountApplication: [164],
                __typename: [377]
            },
            DiscountApplication: {
                allocationMethod: [165],
                targetSelection: [168],
                targetType: [169],
                value: [273],
                on_AutomaticDiscountApplication: [11],
                on_DiscountCodeApplication: [170],
                on_ManualDiscountApplication: [212],
                on_ScriptDiscountApplication: [300],
                __typename: [377]
            },
            DiscountApplicationAllocationMethod: {},
            DiscountApplicationConnection: {
                edges: [167],
                nodes: [164],
                pageInfo: [263],
                __typename: [377]
            },
            DiscountApplicationEdge: {
                cursor: [377],
                node: [164],
                __typename: [377]
            },
            DiscountApplicationTargetSelection: {},
            DiscountApplicationTargetType: {},
            DiscountCodeApplication: {
                allocationMethod: [165],
                applicable: [19],
                code: [377],
                targetSelection: [168],
                targetType: [169],
                value: [273],
                __typename: [377]
            },
            DisplayableError: {
                field: [377],
                message: [377],
                on_CartUserError: [104],
                on_CustomerUserError: [155],
                on_MetafieldDeleteUserError: [229],
                on_MetafieldsSetUserError: [235],
                on_UserError: [399],
                on_UserErrorsShopPayPaymentRequestSessionUserErrors: [400],
                __typename: [377]
            },
            Domain: {
                host: [377],
                sslEnabled: [19],
                url: [390],
                __typename: [377]
            },
            ExternalVideo: {
                alt: [377],
                embedUrl: [390],
                embeddedUrl: [390],
                host: [218],
                id: [189],
                mediaContentType: [216],
                originUrl: [390],
                presentation: [220],
                previewImage: [191],
                __typename: [377]
            },
            Filter: {
                id: [377],
                label: [377],
                presentation: [175],
                type: [176],
                values: [177],
                __typename: [377]
            },
            FilterPresentation: {},
            FilterType: {},
            FilterValue: {
                count: [198],
                id: [377],
                image: [219],
                input: [199],
                label: [377],
                swatch: [386],
                __typename: [377]
            },
            Float: {},
            Fulfillment: {
                fulfillmentLineItems: [181, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                trackingCompany: [377],
                trackingInfo: [183, {
                    first: [198]
                }],
                __typename: [377]
            },
            FulfillmentLineItem: {
                lineItem: [256],
                quantity: [198],
                __typename: [377]
            },
            FulfillmentLineItemConnection: {
                edges: [182],
                nodes: [180],
                pageInfo: [263],
                __typename: [377]
            },
            FulfillmentLineItemEdge: {
                cursor: [377],
                node: [180],
                __typename: [377]
            },
            FulfillmentTrackingInfo: {
                number: [377],
                url: [390],
                __typename: [377]
            },
            GenericFile: {
                alt: [377],
                id: [189],
                mimeType: [377],
                originalFileSize: [198],
                previewImage: [191],
                url: [390],
                __typename: [377]
            },
            GeoCoordinateInput: {
                latitude: [178],
                longitude: [178],
                __typename: [377]
            },
            HTML: {},
            HasMetafields: {
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                on_Article: [4],
                on_Blog: [15],
                on_Cart: [25],
                on_Collection: [109],
                on_Company: [118],
                on_CompanyLocation: [120],
                on_Customer: [132],
                on_Location: [203],
                on_Market: [213],
                on_Order: [250],
                on_Page: [260],
                on_Product: [274],
                on_ProductVariant: [287],
                on_SellingPlan: [312],
                on_Shop: [338],
                __typename: [377]
            },
            HasMetafieldsIdentifier: {
                namespace: [377],
                key: [377],
                __typename: [377]
            },
            ID: {},
            ISO8601DateTime: {},
            Image: {
                altText: [377],
                height: [198],
                id: [189],
                originalSrc: [390],
                src: [390],
                thumbhash: [377],
                transformedSrc: [390, {
                    maxWidth: [198],
                    maxHeight: [198],
                    crop: [129],
                    scale: [198],
                    preferredContentType: [193]
                }],
                url: [390, {
                    transform: [195]
                }],
                width: [198],
                __typename: [377]
            },
            ImageConnection: {
                edges: [194],
                nodes: [191],
                pageInfo: [263],
                __typename: [377]
            },
            ImageContentType: {},
            ImageEdge: {
                cursor: [377],
                node: [191],
                __typename: [377]
            },
            ImageTransformInput: {
                crop: [129],
                maxWidth: [198],
                maxHeight: [198],
                scale: [198],
                preferredContentType: [193],
                __typename: [377]
            },
            InContextAnnotation: {
                description: [377],
                type: [197],
                __typename: [377]
            },
            InContextAnnotationType: {
                kind: [377],
                name: [377],
                __typename: [377]
            },
            Int: {},
            JSON: {},
            Language: {
                endonymName: [377],
                isoCode: [201],
                name: [377],
                __typename: [377]
            },
            LanguageCode: {},
            Localization: {
                availableCountries: [127],
                availableLanguages: [200],
                country: [127],
                language: [200],
                market: [213],
                __typename: [377]
            },
            Location: {
                address: [204],
                id: [189],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                name: [377],
                __typename: [377]
            },
            LocationAddress: {
                address1: [377],
                address2: [377],
                city: [377],
                country: [377],
                countryCode: [377],
                formatted: [377],
                latitude: [178],
                longitude: [178],
                phone: [377],
                province: [377],
                provinceCode: [377],
                zip: [377],
                __typename: [377]
            },
            LocationConnection: {
                edges: [206],
                nodes: [203],
                pageInfo: [263],
                __typename: [377]
            },
            LocationEdge: {
                cursor: [377],
                node: [203],
                __typename: [377]
            },
            LocationSortKeys: {},
            MailingAddress: {
                address1: [377],
                address2: [377],
                city: [377],
                company: [377],
                country: [377],
                countryCode: [377],
                countryCodeV2: [128],
                firstName: [377],
                formatted: [377, {
                    withName: [19],
                    withCompany: [19]
                }],
                formattedArea: [377],
                id: [189],
                lastName: [377],
                latitude: [178],
                longitude: [178],
                name: [377],
                phone: [377],
                province: [377],
                provinceCode: [377],
                zip: [377],
                __typename: [377]
            },
            MailingAddressConnection: {
                edges: [210],
                nodes: [208],
                pageInfo: [263],
                __typename: [377]
            },
            MailingAddressEdge: {
                cursor: [377],
                node: [208],
                __typename: [377]
            },
            MailingAddressInput: {
                address1: [377],
                address2: [377],
                city: [377],
                company: [377],
                country: [377],
                firstName: [377],
                lastName: [377],
                phone: [377],
                province: [377],
                zip: [377],
                __typename: [377]
            },
            ManualDiscountApplication: {
                allocationMethod: [165],
                description: [377],
                targetSelection: [168],
                targetType: [169],
                title: [377],
                value: [273],
                __typename: [377]
            },
            Market: {
                handle: [377],
                id: [189],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                __typename: [377]
            },
            Media: {
                alt: [377],
                id: [189],
                mediaContentType: [216],
                presentation: [220],
                previewImage: [191],
                on_ExternalVideo: [173],
                on_MediaImage: [219],
                on_Model3d: [243],
                on_Video: [403],
                __typename: [377]
            },
            MediaConnection: {
                edges: [217],
                nodes: [214],
                pageInfo: [263],
                __typename: [377]
            },
            MediaContentType: {},
            MediaEdge: {
                cursor: [377],
                node: [214],
                __typename: [377]
            },
            MediaHost: {},
            MediaImage: {
                alt: [377],
                id: [189],
                image: [191],
                mediaContentType: [216],
                presentation: [220],
                previewImage: [191],
                __typename: [377]
            },
            MediaPresentation: {
                asJson: [199, {
                    format: [221, "MediaPresentationFormat!"]
                }],
                id: [189],
                __typename: [377]
            },
            MediaPresentationFormat: {},
            Menu: {
                handle: [377],
                id: [189],
                items: [223],
                itemsCount: [198],
                title: [377],
                __typename: [377]
            },
            MenuItem: {
                id: [189],
                items: [223],
                resource: [224],
                resourceId: [189],
                tags: [377],
                title: [377],
                type: [225],
                url: [390],
                __typename: [377]
            },
            MenuItemResource: {
                on_Article: [4],
                on_Blog: [15],
                on_Collection: [109],
                on_Metaobject: [237],
                on_Page: [260],
                on_Product: [274],
                on_ShopPolicy: [366],
                on_HasMetafields: [187],
                on_Node: [248],
                on_OnlineStorePublishable: [249],
                on_Trackable: [389],
                __typename: [377]
            },
            MenuItemType: {},
            Merchandise: {
                on_ProductVariant: [287],
                on_HasMetafields: [187],
                on_Node: [248],
                __typename: [377]
            },
            Metafield: {
                createdAt: [156],
                description: [377],
                id: [189],
                key: [377],
                list: [19],
                namespace: [377],
                parentResource: [231],
                reference: [232],
                references: [233, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377]
                }],
                type: [377],
                updatedAt: [156],
                value: [377],
                __typename: [377]
            },
            MetafieldDeleteErrorCode: {},
            MetafieldDeleteUserError: {
                code: [228],
                field: [377],
                message: [377],
                __typename: [377]
            },
            MetafieldFilter: {
                namespace: [377],
                key: [377],
                value: [377],
                __typename: [377]
            },
            MetafieldParentResource: {
                on_Article: [4],
                on_Blog: [15],
                on_Cart: [25],
                on_Collection: [109],
                on_Company: [118],
                on_CompanyLocation: [120],
                on_Customer: [132],
                on_Location: [203],
                on_Market: [213],
                on_Order: [250],
                on_Page: [260],
                on_Product: [274],
                on_ProductVariant: [287],
                on_SellingPlan: [312],
                on_Shop: [338],
                on_HasMetafields: [187],
                on_Node: [248],
                on_OnlineStorePublishable: [249],
                on_Trackable: [389],
                __typename: [377]
            },
            MetafieldReference: {
                on_Collection: [109],
                on_GenericFile: [184],
                on_MediaImage: [219],
                on_Metaobject: [237],
                on_Model3d: [243],
                on_Page: [260],
                on_Product: [274],
                on_ProductVariant: [287],
                on_Video: [403],
                on_HasMetafields: [187],
                on_Node: [248],
                on_OnlineStorePublishable: [249],
                on_Trackable: [389],
                on_Media: [214],
                __typename: [377]
            },
            MetafieldReferenceConnection: {
                edges: [234],
                nodes: [232],
                pageInfo: [263],
                __typename: [377]
            },
            MetafieldReferenceEdge: {
                cursor: [377],
                node: [232],
                __typename: [377]
            },
            MetafieldsSetUserError: {
                code: [236],
                elementIndex: [198],
                field: [377],
                message: [377],
                __typename: [377]
            },
            MetafieldsSetUserErrorCode: {},
            Metaobject: {
                field: [240, {
                    key: [377, "String!"]
                }],
                fields: [240],
                handle: [377],
                id: [189],
                onlineStoreUrl: [390],
                seo: [242],
                type: [377],
                updatedAt: [156],
                __typename: [377]
            },
            MetaobjectConnection: {
                edges: [239],
                nodes: [237],
                pageInfo: [263],
                __typename: [377]
            },
            MetaobjectEdge: {
                cursor: [377],
                node: [237],
                __typename: [377]
            },
            MetaobjectField: {
                key: [377],
                reference: [232],
                references: [233, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377]
                }],
                type: [377],
                value: [377],
                __typename: [377]
            },
            MetaobjectHandleInput: {
                handle: [377],
                type: [377],
                __typename: [377]
            },
            MetaobjectSEO: {
                description: [240],
                title: [240],
                __typename: [377]
            },
            Model3d: {
                alt: [377],
                id: [189],
                mediaContentType: [216],
                presentation: [220],
                previewImage: [191],
                sources: [244],
                __typename: [377]
            },
            Model3dSource: {
                filesize: [198],
                format: [377],
                mimeType: [377],
                url: [377],
                __typename: [377]
            },
            MoneyInput: {
                amount: [157],
                currencyCode: [131],
                __typename: [377]
            },
            MoneyV2: {
                amount: [157],
                currencyCode: [131],
                __typename: [377]
            },
            Mutation: {
                cartAttributesUpdate: [28, {
                    attributes: [10, "[AttributeInput!]!"],
                    cartId: [189, "ID!"]
                }],
                cartBillingAddressUpdate: [30, {
                    cartId: [189, "ID!"],
                    billingAddress: [211]
                }],
                cartBuyerIdentityUpdate: [33, {
                    cartId: [189, "ID!"],
                    buyerIdentity: [32, "CartBuyerIdentityInput!"]
                }],
                cartCreate: [43, {
                    input: [71]
                }],
                cartDeliveryAddressesAdd: [48, {
                    cartId: [189, "ID!"],
                    addresses: [95, "[CartSelectableAddressInput!]!"]
                }],
                cartDeliveryAddressesRemove: [49, {
                    cartId: [189, "ID!"],
                    addressIds: [189, "[ID!]!"]
                }],
                cartDeliveryAddressesUpdate: [50, {
                    cartId: [189, "ID!"],
                    addresses: [96, "[CartSelectableAddressUpdateInput!]!"]
                }],
                cartDiscountCodesUpdate: [65, {
                    cartId: [189, "ID!"],
                    discountCodes: [377, "[String!]"]
                }],
                cartGiftCardCodesRemove: [69, {
                    cartId: [189, "ID!"],
                    appliedGiftCardIds: [189, "[ID!]!"]
                }],
                cartGiftCardCodesUpdate: [70, {
                    cartId: [189, "ID!"],
                    giftCardCodes: [377, "[String!]!"]
                }],
                cartLinesAdd: [78, {
                    cartId: [189, "ID!"],
                    lines: [76, "[CartLineInput!]!"]
                }],
                cartLinesRemove: [79, {
                    cartId: [189, "ID!"],
                    lineIds: [189, "[ID!]!"]
                }],
                cartLinesUpdate: [80, {
                    cartId: [189, "ID!"],
                    lines: [77, "[CartLineUpdateInput!]!"]
                }],
                cartMetafieldDelete: [82, {
                    input: [81, "CartMetafieldDeleteInput!"]
                }],
                cartMetafieldsSet: [84, {
                    metafields: [83, "[CartMetafieldsSetInput!]!"]
                }],
                cartNoteUpdate: [85, {
                    cartId: [189, "ID!"],
                    note: [377, "String!"]
                }],
                cartPaymentUpdate: [88, {
                    cartId: [189, "ID!"],
                    payment: [87, "CartPaymentInput!"]
                }],
                cartPrepareForCompletion: [91, {
                    cartId: [189, "ID!"]
                }],
                cartRemovePersonalData: [93, {
                    cartId: [189, "ID!"]
                }],
                cartSelectedDeliveryOptionsUpdate: [98, {
                    cartId: [189, "ID!"],
                    selectedDeliveryOptions: [97, "[CartSelectedDeliveryOptionInput!]!"]
                }],
                cartSubmitForCompletion: [101, {
                    cartId: [189, "ID!"],
                    attemptToken: [377, "String!"]
                }],
                customerAccessTokenCreate: [135, {
                    input: [134, "CustomerAccessTokenCreateInput!"]
                }],
                customerAccessTokenCreateWithMultipass: [136, {
                    multipassToken: [377, "String!"]
                }],
                customerAccessTokenDelete: [137, {
                    customerAccessToken: [377, "String!"]
                }],
                customerAccessTokenRenew: [138, {
                    customerAccessToken: [377, "String!"]
                }],
                customerActivate: [141, {
                    id: [189, "ID!"],
                    input: [140, "CustomerActivateInput!"]
                }],
                customerActivateByUrl: [139, {
                    activationUrl: [390, "URL!"],
                    password: [377, "String!"]
                }],
                customerAddressCreate: [142, {
                    customerAccessToken: [377, "String!"],
                    address: [211, "MailingAddressInput!"]
                }],
                customerAddressDelete: [143, {
                    id: [189, "ID!"],
                    customerAccessToken: [377, "String!"]
                }],
                customerAddressUpdate: [144, {
                    customerAccessToken: [377, "String!"],
                    id: [189, "ID!"],
                    address: [211, "MailingAddressInput!"]
                }],
                customerCreate: [146, {
                    input: [145, "CustomerCreateInput!"]
                }],
                customerDefaultAddressUpdate: [147, {
                    customerAccessToken: [377, "String!"],
                    addressId: [189, "ID!"]
                }],
                customerRecover: [149, {
                    email: [377, "String!"]
                }],
                customerReset: [152, {
                    id: [189, "ID!"],
                    input: [151, "CustomerResetInput!"]
                }],
                customerResetByUrl: [150, {
                    resetUrl: [390, "URL!"],
                    password: [377, "String!"]
                }],
                customerUpdate: [154, {
                    customerAccessToken: [377, "String!"],
                    customer: [153, "CustomerUpdateInput!"]
                }],
                shopPayPaymentRequestSessionCreate: [359, {
                    sourceIdentifier: [377, "String!"],
                    paymentRequest: [354, "ShopPayPaymentRequestInput!"]
                }],
                shopPayPaymentRequestSessionSubmit: [360, {
                    token: [377, "String!"],
                    paymentRequest: [354, "ShopPayPaymentRequestInput!"],
                    idempotencyKey: [377, "String!"],
                    orderName: [377]
                }],
                __typename: [377]
            },
            Node: {
                id: [189],
                on_AppliedGiftCard: [3],
                on_Article: [4],
                on_Blog: [15],
                on_Cart: [25],
                on_CartLine: [73],
                on_Collection: [109],
                on_Comment: [114],
                on_Company: [118],
                on_CompanyContact: [119],
                on_CompanyLocation: [120],
                on_ComponentizableCartLine: [124],
                on_ExternalVideo: [173],
                on_GenericFile: [184],
                on_Location: [203],
                on_MailingAddress: [208],
                on_Market: [213],
                on_MediaImage: [219],
                on_MediaPresentation: [220],
                on_Menu: [222],
                on_MenuItem: [223],
                on_Metafield: [227],
                on_Metaobject: [237],
                on_Model3d: [243],
                on_Order: [250],
                on_Page: [260],
                on_Product: [274],
                on_ProductOption: [281],
                on_ProductOptionValue: [282],
                on_ProductVariant: [287],
                on_Shop: [338],
                on_ShopPayInstallmentsFinancingPlan: [339],
                on_ShopPayInstallmentsFinancingPlanTerm: [341],
                on_ShopPayInstallmentsProductVariantPricing: [344],
                on_ShopPolicy: [366],
                on_TaxonomyCategory: [387],
                on_UrlRedirect: [396],
                on_Video: [403],
                __typename: [377]
            },
            OnlineStorePublishable: {
                onlineStoreUrl: [390],
                on_Article: [4],
                on_Blog: [15],
                on_Collection: [109],
                on_Metaobject: [237],
                on_Page: [260],
                on_Product: [274],
                __typename: [377]
            },
            Order: {
                billingAddress: [208],
                cancelReason: [251],
                canceledAt: [156],
                currencyCode: [131],
                currentSubtotalPrice: [246],
                currentTotalDuties: [246],
                currentTotalPrice: [246],
                currentTotalShippingPrice: [246],
                currentTotalTax: [246],
                customAttributes: [9],
                customerLocale: [377],
                customerUrl: [390],
                discountApplications: [166, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                edited: [19],
                email: [377],
                financialStatus: [254],
                fulfillmentStatus: [255],
                id: [189],
                lineItems: [257, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                name: [377],
                orderNumber: [198],
                originalTotalDuties: [246],
                originalTotalPrice: [246],
                phone: [377],
                processedAt: [156],
                shippingAddress: [208],
                shippingDiscountAllocations: [163],
                statusUrl: [390],
                subtotalPrice: [246],
                subtotalPriceV2: [246],
                successfulFulfillments: [179, {
                    first: [198]
                }],
                totalPrice: [246],
                totalPriceV2: [246],
                totalRefunded: [246],
                totalRefundedV2: [246],
                totalShippingPrice: [246],
                totalShippingPriceV2: [246],
                totalTax: [246],
                totalTaxV2: [246],
                __typename: [377]
            },
            OrderCancelReason: {},
            OrderConnection: {
                edges: [253],
                nodes: [250],
                pageInfo: [263],
                totalCount: [395],
                __typename: [377]
            },
            OrderEdge: {
                cursor: [377],
                node: [250],
                __typename: [377]
            },
            OrderFinancialStatus: {},
            OrderFulfillmentStatus: {},
            OrderLineItem: {
                currentQuantity: [198],
                customAttributes: [9],
                discountAllocations: [163],
                discountedTotalPrice: [246],
                originalTotalPrice: [246],
                quantity: [198],
                title: [377],
                variant: [287],
                __typename: [377]
            },
            OrderLineItemConnection: {
                edges: [258],
                nodes: [256],
                pageInfo: [263],
                __typename: [377]
            },
            OrderLineItemEdge: {
                cursor: [377],
                node: [256],
                __typename: [377]
            },
            OrderSortKeys: {},
            Page: {
                body: [186],
                bodySummary: [377],
                createdAt: [156],
                handle: [377],
                id: [189],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                onlineStoreUrl: [390],
                seo: [299],
                title: [377],
                trackingParameters: [377],
                updatedAt: [156],
                __typename: [377]
            },
            PageConnection: {
                edges: [262],
                nodes: [260],
                pageInfo: [263],
                __typename: [377]
            },
            PageEdge: {
                cursor: [377],
                node: [260],
                __typename: [377]
            },
            PageInfo: {
                endCursor: [377],
                hasNextPage: [19],
                hasPreviousPage: [19],
                startCursor: [377],
                __typename: [377]
            },
            PageSortKeys: {},
            PaginatedSitemapResources: {
                hasNextPage: [19],
                items: [371],
                __typename: [377]
            },
            PaymentSettings: {
                acceptedCardBrands: [24],
                cardVaultUrl: [390],
                countryCode: [128],
                currencyCode: [131],
                enabledPresentmentCurrencies: [131],
                shopifyPaymentsAccountId: [377],
                supportedDigitalWallets: [162],
                __typename: [377]
            },
            PredictiveSearchLimitScope: {},
            PredictiveSearchResult: {
                articles: [4],
                collections: [109],
                pages: [260],
                products: [274],
                queries: [302],
                __typename: [377]
            },
            PredictiveSearchType: {},
            PreferenceDeliveryMethodType: {},
            PriceRangeFilter: {
                min: [178],
                max: [178],
                __typename: [377]
            },
            PricingPercentageValue: {
                percentage: [178],
                __typename: [377]
            },
            PricingValue: {
                on_MoneyV2: [246],
                on_PricingPercentageValue: [272],
                __typename: [377]
            },
            Product: {
                adjacentVariants: [287, {
                    selectedOptions: [311, "[SelectedOptionInput!]"],
                    ignoreUnknownOptions: [19],
                    caseInsensitiveMatch: [19]
                }],
                availableForSale: [19],
                category: [387],
                collections: [110, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                compareAtPriceRange: [284],
                createdAt: [156],
                description: [377, {
                    truncateAt: [198]
                }],
                descriptionHtml: [186],
                encodedVariantAvailability: [377],
                encodedVariantExistence: [377],
                featuredImage: [191],
                handle: [377],
                id: [189],
                images: [192, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [279]
                }],
                isGiftCard: [19],
                media: [215, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [280]
                }],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                onlineStoreUrl: [390],
                options: [281, {
                    first: [198]
                }],
                priceRange: [284],
                productType: [377],
                publishedAt: [156],
                requiresSellingPlan: [19],
                selectedOrFirstAvailableVariant: [287, {
                    selectedOptions: [311, "[SelectedOptionInput!]"],
                    ignoreUnknownOptions: [19],
                    caseInsensitiveMatch: [19]
                }],
                sellingPlanGroups: [328, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                seo: [299],
                tags: [377],
                title: [377],
                totalInventory: [198],
                trackingParameters: [377],
                updatedAt: [156],
                variantBySelectedOptions: [287, {
                    selectedOptions: [311, "[SelectedOptionInput!]!"],
                    ignoreUnknownOptions: [19],
                    caseInsensitiveMatch: [19]
                }],
                variants: [291, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [293]
                }],
                variantsCount: [125],
                vendor: [377],
                __typename: [377]
            },
            ProductCollectionSortKeys: {},
            ProductConnection: {
                edges: [277],
                filters: [174],
                nodes: [274],
                pageInfo: [263],
                __typename: [377]
            },
            ProductEdge: {
                cursor: [377],
                node: [274],
                __typename: [377]
            },
            ProductFilter: {
                available: [19],
                variantOption: [402],
                category: [108],
                taxonomyMetafield: [388],
                productType: [377],
                productVendor: [377],
                price: [271],
                productMetafield: [230],
                variantMetafield: [230],
                tag: [377],
                __typename: [377]
            },
            ProductImageSortKeys: {},
            ProductMediaSortKeys: {},
            ProductOption: {
                id: [189],
                name: [377],
                optionValues: [282],
                values: [377],
                __typename: [377]
            },
            ProductOptionValue: {
                firstSelectableVariant: [287],
                id: [189],
                name: [377],
                swatch: [283],
                __typename: [377]
            },
            ProductOptionValueSwatch: {
                color: [113],
                image: [214],
                __typename: [377]
            },
            ProductPriceRange: {
                maxVariantPrice: [246],
                minVariantPrice: [246],
                __typename: [377]
            },
            ProductRecommendationIntent: {},
            ProductSortKeys: {},
            ProductVariant: {
                availableForSale: [19],
                barcode: [377],
                compareAtPrice: [246],
                compareAtPriceV2: [246],
                components: [289, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377]
                }],
                currentlyNotInStock: [19],
                groupedBy: [291, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377]
                }],
                id: [189],
                image: [191],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                price: [246],
                priceV2: [246],
                product: [274],
                quantityAvailable: [198],
                quantityPriceBreaks: [296, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377]
                }],
                quantityRule: [298],
                requiresComponents: [19],
                requiresShipping: [19],
                selectedOptions: [310],
                sellingPlanAllocations: [314, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                shopPayInstallmentsPricing: [344],
                sku: [377],
                storeAvailability: [375, {
                    near: [185],
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                taxable: [19],
                title: [377],
                unitPrice: [246],
                unitPriceMeasurement: [391],
                weight: [178],
                weightUnit: [405],
                __typename: [377]
            },
            ProductVariantComponent: {
                productVariant: [287],
                quantity: [198],
                __typename: [377]
            },
            ProductVariantComponentConnection: {
                edges: [290],
                nodes: [288],
                pageInfo: [263],
                __typename: [377]
            },
            ProductVariantComponentEdge: {
                cursor: [377],
                node: [288],
                __typename: [377]
            },
            ProductVariantConnection: {
                edges: [292],
                nodes: [287],
                pageInfo: [263],
                __typename: [377]
            },
            ProductVariantEdge: {
                cursor: [377],
                node: [287],
                __typename: [377]
            },
            ProductVariantSortKeys: {},
            PurchasingCompany: {
                company: [118],
                contact: [119],
                location: [120],
                __typename: [377]
            },
            QuantityPriceBreak: {
                minimumQuantity: [198],
                price: [246],
                __typename: [377]
            },
            QuantityPriceBreakConnection: {
                edges: [297],
                nodes: [295],
                pageInfo: [263],
                __typename: [377]
            },
            QuantityPriceBreakEdge: {
                cursor: [377],
                node: [295],
                __typename: [377]
            },
            QuantityRule: {
                increment: [198],
                maximum: [198],
                minimum: [198],
                __typename: [377]
            },
            SEO: {
                description: [377],
                title: [377],
                __typename: [377]
            },
            ScriptDiscountApplication: {
                allocationMethod: [165],
                targetSelection: [168],
                targetType: [169],
                title: [377],
                value: [273],
                __typename: [377]
            },
            SearchPrefixQueryType: {},
            SearchQuerySuggestion: {
                styledText: [377],
                text: [377],
                trackingParameters: [377],
                __typename: [377]
            },
            SearchResultItem: {
                on_Article: [4],
                on_Page: [260],
                on_Product: [274],
                on_HasMetafields: [187],
                on_Node: [248],
                on_OnlineStorePublishable: [249],
                on_Trackable: [389],
                __typename: [377]
            },
            SearchResultItemConnection: {
                edges: [305],
                nodes: [303],
                pageInfo: [263],
                productFilters: [174],
                totalCount: [198],
                __typename: [377]
            },
            SearchResultItemEdge: {
                cursor: [377],
                node: [303],
                __typename: [377]
            },
            SearchSortKeys: {},
            SearchType: {},
            SearchUnavailableProductsType: {},
            SearchableField: {},
            SelectedOption: {
                name: [377],
                value: [377],
                __typename: [377]
            },
            SelectedOptionInput: {
                name: [377],
                value: [377],
                __typename: [377]
            },
            SellingPlan: {
                billingPolicy: [317],
                checkoutCharge: [318],
                deliveryPolicy: [323],
                description: [377],
                id: [189],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                name: [377],
                options: [332],
                priceAdjustments: [334],
                recurringDeliveries: [19],
                __typename: [377]
            },
            SellingPlanAllocation: {
                checkoutChargeAmount: [246],
                priceAdjustments: [316],
                remainingBalanceChargeAmount: [246],
                sellingPlan: [312],
                __typename: [377]
            },
            SellingPlanAllocationConnection: {
                edges: [315],
                nodes: [313],
                pageInfo: [263],
                __typename: [377]
            },
            SellingPlanAllocationEdge: {
                cursor: [377],
                node: [313],
                __typename: [377]
            },
            SellingPlanAllocationPriceAdjustment: {
                compareAtPrice: [246],
                perDeliveryPrice: [246],
                price: [246],
                unitPrice: [246],
                __typename: [377]
            },
            SellingPlanBillingPolicy: {
                on_SellingPlanRecurringBillingPolicy: [336],
                __typename: [377]
            },
            SellingPlanCheckoutCharge: {
                type: [320],
                value: [321],
                __typename: [377]
            },
            SellingPlanCheckoutChargePercentageValue: {
                percentage: [178],
                __typename: [377]
            },
            SellingPlanCheckoutChargeType: {},
            SellingPlanCheckoutChargeValue: {
                on_MoneyV2: [246],
                on_SellingPlanCheckoutChargePercentageValue: [319],
                __typename: [377]
            },
            SellingPlanConnection: {
                edges: [324],
                nodes: [312],
                pageInfo: [263],
                __typename: [377]
            },
            SellingPlanDeliveryPolicy: {
                on_SellingPlanRecurringDeliveryPolicy: [337],
                __typename: [377]
            },
            SellingPlanEdge: {
                cursor: [377],
                node: [312],
                __typename: [377]
            },
            SellingPlanFixedAmountPriceAdjustment: {
                adjustmentAmount: [246],
                __typename: [377]
            },
            SellingPlanFixedPriceAdjustment: {
                price: [246],
                __typename: [377]
            },
            SellingPlanGroup: {
                appName: [377],
                name: [377],
                options: [330],
                sellingPlans: [322, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                __typename: [377]
            },
            SellingPlanGroupConnection: {
                edges: [329],
                nodes: [327],
                pageInfo: [263],
                __typename: [377]
            },
            SellingPlanGroupEdge: {
                cursor: [377],
                node: [327],
                __typename: [377]
            },
            SellingPlanGroupOption: {
                name: [377],
                values: [377],
                __typename: [377]
            },
            SellingPlanInterval: {},
            SellingPlanOption: {
                name: [377],
                value: [377],
                __typename: [377]
            },
            SellingPlanPercentagePriceAdjustment: {
                adjustmentPercentage: [178],
                __typename: [377]
            },
            SellingPlanPriceAdjustment: {
                adjustmentValue: [335],
                orderCount: [198],
                __typename: [377]
            },
            SellingPlanPriceAdjustmentValue: {
                on_SellingPlanFixedAmountPriceAdjustment: [325],
                on_SellingPlanFixedPriceAdjustment: [326],
                on_SellingPlanPercentagePriceAdjustment: [333],
                __typename: [377]
            },
            SellingPlanRecurringBillingPolicy: {
                interval: [331],
                intervalCount: [198],
                __typename: [377]
            },
            SellingPlanRecurringDeliveryPolicy: {
                interval: [331],
                intervalCount: [198],
                __typename: [377]
            },
            Shop: {
                brand: [20],
                customerAccountUrl: [377],
                description: [377],
                id: [189],
                metafield: [227, {
                    namespace: [377],
                    key: [377, "String!"]
                }],
                metafields: [227, {
                    identifiers: [188, "[HasMetafieldsIdentifier!]!"]
                }],
                moneyFormat: [377],
                name: [377],
                paymentSettings: [266],
                primaryDomain: [172],
                privacyPolicy: [366],
                refundPolicy: [366],
                shippingPolicy: [366],
                shipsToCountries: [128],
                shopPayInstallmentsPricing: [343],
                subscriptionPolicy: [367],
                termsOfService: [366],
                __typename: [377]
            },
            ShopPayInstallmentsFinancingPlan: {
                id: [189],
                maxPrice: [246],
                minPrice: [246],
                terms: [341],
                __typename: [377]
            },
            ShopPayInstallmentsFinancingPlanFrequency: {},
            ShopPayInstallmentsFinancingPlanTerm: {
                apr: [198],
                frequency: [340],
                id: [189],
                installmentsCount: [125],
                loanType: [342],
                __typename: [377]
            },
            ShopPayInstallmentsLoan: {},
            ShopPayInstallmentsPricing: {
                financingPlans: [339],
                maxPrice: [246],
                minPrice: [246],
                __typename: [377]
            },
            ShopPayInstallmentsProductVariantPricing: {
                available: [19],
                eligible: [19],
                fullPrice: [246],
                id: [189],
                installmentsCount: [125],
                pricePerTerm: [246],
                __typename: [377]
            },
            ShopPayPaymentRequest: {
                deliveryMethods: [347],
                discountCodes: [377],
                discounts: [350],
                lineItems: [355],
                locale: [377],
                presentmentCurrency: [131],
                selectedDeliveryMethodType: [349],
                shippingAddress: [346],
                shippingLines: [361],
                subtotal: [246],
                total: [246],
                totalShippingPrice: [363],
                totalTax: [246],
                __typename: [377]
            },
            ShopPayPaymentRequestContactField: {
                address1: [377],
                address2: [377],
                city: [377],
                companyName: [377],
                countryCode: [377],
                email: [377],
                firstName: [377],
                lastName: [377],
                phone: [377],
                postalCode: [377],
                provinceCode: [377],
                __typename: [377]
            },
            ShopPayPaymentRequestDeliveryMethod: {
                amount: [246],
                code: [377],
                deliveryExpectationLabel: [377],
                detail: [377],
                label: [377],
                maxDeliveryDate: [190],
                minDeliveryDate: [190],
                __typename: [377]
            },
            ShopPayPaymentRequestDeliveryMethodInput: {
                code: [377],
                label: [377],
                detail: [377],
                amount: [245],
                minDeliveryDate: [190],
                maxDeliveryDate: [190],
                deliveryExpectationLabel: [377],
                __typename: [377]
            },
            ShopPayPaymentRequestDeliveryMethodType: {},
            ShopPayPaymentRequestDiscount: {
                amount: [246],
                label: [377],
                __typename: [377]
            },
            ShopPayPaymentRequestDiscountInput: {
                label: [377],
                amount: [245],
                __typename: [377]
            },
            ShopPayPaymentRequestImage: {
                alt: [377],
                url: [377],
                __typename: [377]
            },
            ShopPayPaymentRequestImageInput: {
                url: [377],
                alt: [377],
                __typename: [377]
            },
            ShopPayPaymentRequestInput: {
                discountCodes: [377],
                lineItems: [356],
                shippingLines: [362],
                total: [245],
                subtotal: [245],
                discounts: [351],
                totalShippingPrice: [364],
                totalTax: [245],
                deliveryMethods: [348],
                selectedDeliveryMethodType: [349],
                locale: [377],
                presentmentCurrency: [131],
                paymentMethod: [377],
                __typename: [377]
            },
            ShopPayPaymentRequestLineItem: {
                finalItemPrice: [246],
                finalLinePrice: [246],
                image: [352],
                itemDiscounts: [350],
                label: [377],
                lineDiscounts: [350],
                originalItemPrice: [246],
                originalLinePrice: [246],
                quantity: [198],
                requiresShipping: [19],
                sku: [377],
                __typename: [377]
            },
            ShopPayPaymentRequestLineItemInput: {
                label: [377],
                quantity: [198],
                sku: [377],
                requiresShipping: [19],
                image: [353],
                originalLinePrice: [245],
                finalLinePrice: [245],
                lineDiscounts: [351],
                originalItemPrice: [245],
                finalItemPrice: [245],
                itemDiscounts: [351],
                __typename: [377]
            },
            ShopPayPaymentRequestReceipt: {
                paymentRequest: [345],
                processingStatusType: [377],
                token: [377],
                __typename: [377]
            },
            ShopPayPaymentRequestSession: {
                checkoutUrl: [390],
                paymentRequest: [345],
                sourceIdentifier: [377],
                token: [377],
                __typename: [377]
            },
            ShopPayPaymentRequestSessionCreatePayload: {
                shopPayPaymentRequestSession: [358],
                userErrors: [400],
                __typename: [377]
            },
            ShopPayPaymentRequestSessionSubmitPayload: {
                paymentRequestReceipt: [357],
                userErrors: [400],
                __typename: [377]
            },
            ShopPayPaymentRequestShippingLine: {
                amount: [246],
                code: [377],
                label: [377],
                __typename: [377]
            },
            ShopPayPaymentRequestShippingLineInput: {
                code: [377],
                label: [377],
                amount: [245],
                __typename: [377]
            },
            ShopPayPaymentRequestTotalShippingPrice: {
                discounts: [350],
                finalTotal: [246],
                originalTotal: [246],
                __typename: [377]
            },
            ShopPayPaymentRequestTotalShippingPriceInput: {
                discounts: [351],
                originalTotal: [245],
                finalTotal: [245],
                __typename: [377]
            },
            ShopPayWalletContentInput: {
                billingAddress: [211],
                sessionToken: [377],
                __typename: [377]
            },
            ShopPolicy: {
                body: [377],
                handle: [377],
                id: [189],
                title: [377],
                url: [390],
                __typename: [377]
            },
            ShopPolicyWithDefault: {
                body: [377],
                handle: [377],
                id: [189],
                title: [377],
                url: [390],
                __typename: [377]
            },
            Sitemap: {
                pagesCount: [125],
                resources: [265, {
                    page: [198, "Int!"]
                }],
                __typename: [377]
            },
            SitemapImage: {
                alt: [377],
                filepath: [377],
                updatedAt: [156],
                __typename: [377]
            },
            SitemapResource: {
                handle: [377],
                image: [369],
                title: [377],
                updatedAt: [156],
                __typename: [377]
            },
            SitemapResourceInterface: {
                handle: [377],
                updatedAt: [156],
                on_SitemapResource: [370],
                on_SitemapResourceMetaobject: [372],
                __typename: [377]
            },
            SitemapResourceMetaobject: {
                handle: [377],
                onlineStoreUrlHandle: [377],
                type: [377],
                updatedAt: [156],
                __typename: [377]
            },
            SitemapType: {},
            StoreAvailability: {
                available: [19],
                location: [203],
                pickUpTime: [377],
                quantityAvailable: [198],
                __typename: [377]
            },
            StoreAvailabilityConnection: {
                edges: [376],
                nodes: [374],
                pageInfo: [263],
                __typename: [377]
            },
            StoreAvailabilityEdge: {
                cursor: [377],
                node: [374],
                __typename: [377]
            },
            String: {},
            StringConnection: {
                edges: [379],
                nodes: [377],
                pageInfo: [263],
                __typename: [377]
            },
            StringEdge: {
                cursor: [377],
                node: [377],
                __typename: [377]
            },
            SubmissionError: {
                code: [381],
                message: [377],
                __typename: [377]
            },
            SubmissionErrorCode: {},
            SubmitAlreadyAccepted: {
                attemptId: [377],
                __typename: [377]
            },
            SubmitFailed: {
                checkoutUrl: [390],
                errors: [380],
                __typename: [377]
            },
            SubmitSuccess: {
                attemptId: [377],
                redirectUrl: [390],
                __typename: [377]
            },
            SubmitThrottled: {
                pollAfter: [156],
                __typename: [377]
            },
            Swatch: {
                color: [113],
                image: [219],
                __typename: [377]
            },
            TaxonomyCategory: {
                ancestors: [387],
                id: [189],
                name: [377],
                __typename: [377]
            },
            TaxonomyMetafieldFilter: {
                namespace: [377],
                key: [377],
                value: [377],
                __typename: [377]
            },
            Trackable: {
                trackingParameters: [377],
                on_Article: [4],
                on_Collection: [109],
                on_Page: [260],
                on_Product: [274],
                on_SearchQuerySuggestion: [302],
                __typename: [377]
            },
            URL: {},
            UnitPriceMeasurement: {
                measuredType: [392],
                quantityUnit: [393],
                quantityValue: [178],
                referenceUnit: [393],
                referenceValue: [198],
                __typename: [377]
            },
            UnitPriceMeasurementMeasuredType: {},
            UnitPriceMeasurementMeasuredUnit: {},
            UnitSystem: {},
            UnsignedInt64: {},
            UrlRedirect: {
                id: [189],
                path: [377],
                target: [377],
                __typename: [377]
            },
            UrlRedirectConnection: {
                edges: [398],
                nodes: [396],
                pageInfo: [263],
                __typename: [377]
            },
            UrlRedirectEdge: {
                cursor: [377],
                node: [396],
                __typename: [377]
            },
            UserError: {
                field: [377],
                message: [377],
                __typename: [377]
            },
            UserErrorsShopPayPaymentRequestSessionUserErrors: {
                code: [401],
                field: [377],
                message: [377],
                __typename: [377]
            },
            UserErrorsShopPayPaymentRequestSessionUserErrorsCode: {},
            VariantOptionFilter: {
                name: [377],
                value: [377],
                __typename: [377]
            },
            Video: {
                alt: [377],
                id: [189],
                mediaContentType: [216],
                presentation: [220],
                previewImage: [191],
                sources: [404],
                __typename: [377]
            },
            VideoSource: {
                format: [377],
                height: [198],
                mimeType: [377],
                url: [377],
                width: [198],
                __typename: [377]
            },
            WeightUnit: {},
            Query: {
                article: [4, {
                    id: [189, "ID!"]
                }],
                articles: [6, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [8],
                    query: [377]
                }],
                blog: [15, {
                    handle: [377],
                    id: [189]
                }],
                blogByHandle: [15, {
                    handle: [377, "String!"]
                }],
                blogs: [16, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [18],
                    query: [377]
                }],
                cart: [25, {
                    id: [189, "ID!"]
                }],
                cartCompletionAttempt: [38, {
                    attemptId: [377, "String!"]
                }],
                collection: [109, {
                    id: [189],
                    handle: [377]
                }],
                collectionByHandle: [109, {
                    handle: [377, "String!"]
                }],
                collections: [110, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [112],
                    query: [377]
                }],
                customer: [132, {
                    customerAccessToken: [377, "String!"]
                }],
                localization: [202],
                locations: [205, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [207],
                    near: [185]
                }],
                menu: [222, {
                    handle: [377, "String!"]
                }],
                metaobject: [237, {
                    id: [189],
                    handle: [241]
                }],
                metaobjects: [238, {
                    type: [377, "String!"],
                    sortKey: [377],
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19]
                }],
                node: [248, {
                    id: [189, "ID!"]
                }],
                nodes: [248, {
                    ids: [189, "[ID!]!"]
                }],
                page: [260, {
                    handle: [377],
                    id: [189]
                }],
                pageByHandle: [260, {
                    handle: [377, "String!"]
                }],
                pages: [261, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [264],
                    query: [377]
                }],
                paymentSettings: [266],
                predictiveSearch: [268, {
                    limit: [198],
                    limitScope: [267],
                    query: [377, "String!"],
                    searchableFields: [309, "[SearchableField!]"],
                    types: [269, "[PredictiveSearchType!]"],
                    unavailableProducts: [308]
                }],
                product: [274, {
                    id: [189],
                    handle: [377]
                }],
                productByHandle: [274, {
                    handle: [377, "String!"]
                }],
                productRecommendations: [274, {
                    productId: [189],
                    productHandle: [377],
                    intent: [285]
                }],
                productTags: [378, {
                    first: [198, "Int!"]
                }],
                productTypes: [378, {
                    first: [198, "Int!"]
                }],
                products: [276, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [286],
                    query: [377]
                }],
                publicApiVersions: [0],
                search: [304, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    sortKey: [306],
                    query: [377, "String!"],
                    prefix: [301],
                    productFilters: [278, "[ProductFilter!]"],
                    types: [307, "[SearchType!]"],
                    unavailableProducts: [308]
                }],
                shop: [338],
                sitemap: [368, {
                    type: [373, "SitemapType!"]
                }],
                urlRedirects: [397, {
                    first: [198],
                    after: [377],
                    last: [198],
                    before: [377],
                    reverse: [19],
                    query: [377]
                }],
                __typename: [377]
            }
        }
    }).types).map((e, t) => ({
        [t]: e
    }))), Object.keys(a = Object.assign({}, ...Object.keys(n.types || {}).map(e => {
        let a = n.types[e] || {};
        return {
            [e]: {
                name: e,
                scalar: Object.keys(a).filter(e => {
                    let [t] = a[e] || [];
                    return !(!(t && n.scalars.includes(t)) || Object.values(a[e] ? .[1] || {}).map(e => e ? .[1]).filter(Boolean).some(e => e && e.endsWith("!")))
                }),
                fields: Object.assign({}, ...Object.keys(a).map(e => {
                    let [n, r] = a[e] || [];
                    return null == n ? {} : {
                        [e]: {
                            type: t[n],
                            args: Object.assign({}, ...Object.keys(r || {}).map(e => {
                                if (!r || !r[e]) return;
                                let [a, n] = r[e];
                                return {
                                    [e]: [t[a], n || t[a]]
                                }
                            }))
                        }
                    }
                }))
            }
        }
    }))).forEach(e => {
        let t = a[e];
        if (!t.fields) return;
        let n = t.fields;
        Object.keys(n).forEach(e => {
            let t = n[e];
            if (t.args) {
                let e = t.args;
                Object.keys(e).forEach(t => {
                    let n = e[t];
                    if (n) {
                        let [e] = n;
                        "string" == typeof e && (a[e] || (a[e] = {
                            name: e
                        }), n[0] = a[e])
                    }
                })
            }
            let r = t.type;
            "string" == typeof r && (a[r] || (a[r] = {
                name: r
            }), t.type = a[r])
        })
    }), e.i(654816), e.i(738368), e.i(78415), e.i(264516), e.i(163726), e.i(409043);
    e.i(254979), e.i(265890);
    var o = e.i(747815);
    e.i(536168);
    var s = e.i(452693);
    e.i(842948);
    var l = e.i(631935),
        d = e.i(685472);
    e.i(506411);
    var c = e.i(237341);
    e.i(274250);
    var m = e.i(170255);
    e.i(601917);
    var p = e.i(125125),
        u = e.i(753221),
        y = e.i(544808),
        _ = e.i(63535);
    e.i(883820);
    var g = e.i(748016);
    e.i(174715);
    var f = e.i(569837),
        C = e.i(9446);
    e.i(673279), e.i(47811);
    var P = e.i(410219);
    let S = P.gql `
  title
  titleImage {
    url
    title
  }
  subtitle
  description {
    json
  }
  image {
    url
    title
  }
  imageMobile:imageSecondary {
    url
  }
  link {
    label
    url
  }
  contentBlockVariant: campaignBuilderVariant
  video {
    url
    title
  }
  videoMobile {
    url
    title
  }
`;
    P.gql `
  title
  subtitle
  description {
    json
  }
  image {
    url
    title
  }
  link {
    label
    url
    dynamicDrawerContent: drawerContentCollection (limit: 2) {
      items {
        ...on ContentBlock {
          type:__typename
          ${S}
        }
      }
    }
  }
  videoUrl
  videoMobileUrl
  videoTitle
  imageMobile:imageSecondary {
    url
  }
  loopVideo
  caption
`, P.gql `
  title
  subtitle
  image {
    url
  }
  sectionInformationVariant: campaignBuilderVariant
  contentBlocks: contentBlocksCollection(limit: 10) {
    items {
      ${S}
    }
  }
  pdpIntroductionGrid
  disclaimer
  tag
`;
    let I = P.gql `
  featuresCollection(limit: 20) {
    items {
      title
      icon
    }
  }
`,
        h = P.gql `
  sys {
    id
  }
  title
  nodeId_data {
    sku
    title
    product {
      handle
    }
  }
  marketingHeaderAsset {
    url
    title
    contentType
  }
  marketingHeaderAssetMobile {
    url
    title
    contentType
  }
  promotionImage {
    title
    url
  }
  promotionImageMobile {
    title
    url
  }
  customOfferCardImage {
    url
  }
  discountLabel
`,
        A = `
  label
  tag
  title
  variantsCollection(limit: 25) {
    items {
      promoInfoText {
        json
      }
      promoInfoLink {
        url
        label
        textToCopy
        dynamicDrawerContent: drawerContentCollection(limit: 2) {
          items {
            type: __typename
            ...on ContentBlock {
              ${S}
            }
          }
        }
      }
      ${h}
    }
  }
`,
        v = `
{
  ${A}
}
`;
    P.gql `
  feature1Title
  feature1Description
  feature1Icon {
    identifier
  }
  feature2Title
  feature2Description
  feature2Icon {
    identifier
  }
  feature3Title
  feature3Description
  feature3Icon {
    identifier
  }
  feature4Title
  feature4Description
  feature4Icon {
    identifier
  }
  feature5Title
  feature5Description
  feature5Icon {
    identifier
  }
  feature6Title
  feature6Description
  feature6Icon {
    identifier
  }
  feature7Title
  feature7Description
  feature7Icon {
    identifier
  }
  feature8Title
  feature8Description
  feature8Icon {
    identifier
  }
`, P.gql `
  backgroundFill
  category
  discountLabel
  features: ${I}
  freeShipping
  handle
  notifyMeFormName
  primaryVariants ${v}
  secondaryVariants ${v}
  shortDescription
  tokenGatingCampaignId
  tokenGatingCampaignIdStg
  showDiscount
  statusLabel { title icon variant }
  title
`, P.gql `
  image {
    url
  }
  questions: questionsCollection(limit: 10) {
    items {
      question
      answer {
        json
      }
    }
  }
  termsAndConditions {
    json
  }
`, P.gql `
  ... on CollectionManagement {
    title
    subTitle
    imageCollection(limit: 10) {
      items {
        title
        description
        url
      }
    }
    informationCollection(limit: 10) {
      items {
        ... on ProductFeatures {title icon }
      }
    }
   }
`, P.gql `
  title
  miniTitle
  headerDescription: description
  longDescription
  disclaimer
  image {
    url
    title
  }
  imageForMobile {
    url
    title
  }
  video {
    url
    title
  }
  loopVideo
  videoUrl
  cta {
    url
    label
    displayAnchorArrow
  }
  queryParam  
  marketingHeaderVariants: variantsCollection(limit: 10) {
    items { ${h} }
  }
  marketingPageHeaderVariant: campaignBuilderVariant
  smallVariantImage {
    url
    title
  }
  imagePositionLeft
  productFeatures: productFeaturesCollection(limit: 2) {
    items {
      title
      icon
    }
  }
`, P.gql `
  title
  description
  image {
    url
  }
  seoNoIndexNoFollow
`, P.gql `
    title
    miniTitle
    description
    cta1Label
    cta2 {
      label
      url
    }
    image1Desktop {
      url
      title
    }
    image2Desktop {
      url
      title
    }
    imageMobile {
      url
      title
    }
    backgroundImageDesktop {
      url
    }
    backgroundImageMobile {
      url
    }
    anchorLinkArrow {
      url
    }
`, P.gql `
    title
    secondaryTitle
    description
    videoTitle
    images: imagesCollection {
      items {
        title
        url
      }
    }
    hudTags
    videoMobile
    videoDesktop
`, e.i(468411), e.i(554694), e.i(663485);
    var b = e.i(98887);
    e.i(413202);
    var k = e.i(188532),
        T = e.i(780629);
    e.s(["FlexMarketingPage", 0, function({
        settings: e,
        footer: t,
        navigationData: a,
        pageData: n
    }) {
        let {
            pageMeta: P,
            hero: S,
            triRecap: I,
            videoVariants: h,
            supportedCryptoBlock: A,
            faqBlock: v,
            ledgerWalletBlock: D,
            stickyNavigation: M,
            product: U,
            bigSectionBlock: E,
            detailsSecurityFocus: R,
            comparison: V,
            detailsFocusFeature: q,
            detailsFeatures: O,
            recoverFocus: x,
            disclaimer: L
        } = n, F = "light", [j, w] = (0, i.useState)(U.variants[0]), B = (0, i.useRef)(M ? .length ? M.map(() => i.default.createRef()) : []);
        return (0, r.jsxs)(b.default, {
            pageMeta: P,
            siteSettings: e,
            footer: t,
            navigationData: a,
            hideNavOnScroll: !!M,
            trackingData: {
                page_type: "product detail page",
                item_category: "ledger-flex"
            },
            theme: F,
            children: [M && (0, r.jsx)(s.default, {
                navigation: M,
                product: U,
                currentVariant: j,
                setCurrentVariant: w,
                variants: U.variants,
                sectionRefs: B.current
            }), (0, r.jsx)("div", {
                className: "bg-neutral-50",
                children: (0, r.jsx)(o.default, {
                    setCurrentVariant: w,
                    currentVariant: j,
                    description: S.longDescription || "",
                    title: S.title,
                    productVariants: U.variants,
                    theme: F,
                    loopVideo: S.loopVideo,
                    videoUrl: S.videoUrl,
                    scrollToButton: e => (0, C.scrollTo)(e, B.current[0]),
                    miniTitle: S.miniTitle,
                    primaryVariants: U.primaryVariants,
                    secondaryVariants: U.secondaryVariants,
                    heroProductFeatures: S.productFeatures ? ? []
                })
            }), (0, r.jsx)(u.default, {
                id: "overview",
                ...B.current && {
                    ref: B.current[0]
                },
                children: (0, r.jsx)(d.default, {
                    theme: "light",
                    ...I
                })
            }), (0, r.jsx)(u.default, {
                id: "showcase",
                ...B.current && {
                    ref: B.current[1]
                },
                children: (0, r.jsx)(l.default, {
                    theme: "light",
                    devices: h,
                    isVariant: !0,
                    dataCsOverrideId: "3d-product",
                    dataCsOverrideIdTab: "3d-view-CTA"
                })
            }), (0, r.jsx)(u.default, {
                id: "features",
                ...B.current && {
                    ref: B.current[2]
                },
                children: (0, r.jsx)("div", {
                    className: "flex flex-col gap-32 bg-neutral-50 py-80 lg:py-112",
                    children: R.map((e, t) => (0, i.createElement)(y.default, { ...e,
                        key: e.title,
                        theme: "light",
                        dataCsOverrideId: 0 === t ? "USPs-security" : "USPs-ux"
                    }))
                })
            }), O && (0, r.jsx)("div", {
                className: "bg-neutral-50",
                children: (0, r.jsx)(g.default, {
                    contentBlocks: O,
                    sizeVariant: "default",
                    dataCsOverrideId: "Flex-USPs"
                })
            }), q && (0, r.jsx)("div", {
                className: "bg-neutral-200",
                children: (0, r.jsx)(y.default, {
                    verticalSpacing: "medium",
                    ...q,
                    theme: "light",
                    dataCsOverrideId: "block-securitykey",
                    contentBlockVariant: "Ledger Security Focus Feature"
                })
            }), (0, r.jsx)(p.default, { ...E
            }), D && ("Ledger Wallet V4 Info" === D.sectionInformationVariant ? (0, r.jsx)(T.LedgerWalletInfoNew, {
                contentBlocks: D.contentBlocks,
                theme: "dark",
                dataCSOverrideId: "block-LedgerWallet"
            }) : (0, r.jsx)(k.default, {
                title: D.title,
                description: D.subtitle,
                tag: D.tag ? ? null,
                image: D.image ? ? null,
                contentBlocks: D.contentBlocks,
                disclaimer: D.disclaimer,
                theme: "dark",
                dataCSOverrideId: "block-LedgerWallet"
            })), A && (0, r.jsx)(c.default, {
                contentBlock: { ...A,
                    dataCsOverrideId: "block-supportedcrypto"
                }
            }), x && (0, r.jsx)("div", {
                className: "bg-black",
                children: (0, r.jsx)(y.default, { ...x,
                    dataCsOverrideId: "block-Recover",
                    verticalSpacing: "medium"
                })
            }), V && (0, r.jsx)("div", {
                className: "bg-black",
                children: (0, r.jsx)(_.default, {
                    dataCSOverrideId: "block-comparison",
                    productsToCompareByDevice: V.productsToCompareByDevice,
                    subtitle: V.subtitle,
                    template: V.template,
                    theme: "dark",
                    title: V.title
                })
            }), v && (0, r.jsx)(m.default, {
                faq: v
            }), L && (0, r.jsx)(f.default, {
                text: L
            })]
        })
    }], 761420)
}]);

//# sourceMappingURL=0.y81q537r_z_.js.map