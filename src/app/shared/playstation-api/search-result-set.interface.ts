export interface SearchResultSet {
    data: {
        attributes: {
            next?: string[];
            query?: string;
            size?: number;
            start?: number;
            total_results?: number;
            total_suggested?: number;
            'badge-info'?: {
                'non-plus-user': null;
                'plus-user': null;
            };
            'cero-z-status'?: {
                'is-allowed-in-cart': boolean;
                'is-on': boolean;
            };
            'content-rating'?: {
                'content-descriptors': {
                    description: string;
                    name: string;
                    url: null;
                }[];
                contentInteractiveElement: any[];
                'rating-system': string;
                url: string;
            };
            'content-type'?: string;
            'default-sku-id'?: string;
            'dob-required'?: boolean;
            'file-size'?: {
                unit: string;
                value: number;
            };
            'game-content-type'?: string;
            genres?: string[];
            'is-igc-upsell'?: boolean;
            'is-multiplayer-upsell'?: boolean;
            'kamaji-relationship'?: string;
            'legal-text'?: string;
            'long-description'?: string;
            'macross-brain-context'?: string;
            'media-list'?: {
                preview: {
                    url: string;
                }[];
                promo: {
                    images: {
                        url: string;
                    }[];
                    videos: {
                        url: string;
                    }[];
                };
                screenshots: {
                    url: string;
                }[];
            };
            name?: string;
            'nsx-confirm-message'?: string;
            parent: null | {
                id: string;
                name: string;
                thumbnail: string;
                url: string;
            };
            platforms?: string[];
            'plus-reward-description'?: null;
            'primary-classification'?: string;
            'provider-name'?: string;
            'ps-camera-compatibility'?: string;
            'ps-move-compatibility'?: string;
            'ps-vr-compatibility'?: string;
            'release-date'?: string;
            'secondary-classification'?: string;
            skus?: {
                entitlements: {
                    duration: number;
                    'exp-after-first-use': number;
                }[];
                id: string;
                'is-preorder': boolean;
                multibuy: null;
                name: string;
                'playability-date': string;
                'plus-reward-description': null;
                prices: {
                    'non-plus-user': {
                        'actual-price': {
                            display: string;
                            value: number;
                        };
                        availability: {
                            'end-date': null;
                            'start-date': null;
                        };
                        'discount-percentage': number;
                        'is-plus': boolean;
                        'strikethrough-price': null;
                        'upsell-price': null;
                    };
                    'plus-user': {
                        'actual-price': {
                            display: string;
                            value: number;
                        };
                        availability: {
                            'end-date': null;
                            'start-date': null;
                        };
                        'discount-percentage': number;
                        'is-plus': boolean;
                        'strikethrough-price': null;
                        'upsell-price': null;
                    };
                };
            }[];
            'star-rating'?: {
                score: number;
                total: number;
            };
            'subtitle-language-codes'?: any[];
            'tertiary-classification'?: string;
            'thumbnail-url-base'?: string;
            'top-category'?: string;
            'upsell-info'?: null;
            'voice-language-codes'?: any[];
        };
        id: string;
        relationships: {
            children: {
                data: {
                    id: string;
                    meta?: {
                        'is-suggested': boolean;
                    };
                    type: string;
                }[];
            };
            'legacy-skus'?: {
                data: {
                    id: string;
                    meta?: {
                        'is-suggested': boolean;
                    };
                    type: string;
                }[];
            };
        };
        type: string;
    };
    included: {
        attributes: {
            next?: string[];
            query?: string;
            size?: number;
            start?: number;
            total_results?: number;
            total_suggested?: number;
            'badge-info'?: {
                'non-plus-user': null;
                'plus-user': null;
            };
            'cero-z-status'?: {
                'is-allowed-in-cart': boolean;
                'is-on': boolean;
            };
            'content-rating'?: {
                'content-descriptors': {
                    description: string;
                    name: string;
                    url: null;
                }[];
                contentInteractiveElement: any[];
                'rating-system': string;
                url: string;
            };
            'content-type'?: string;
            'default-sku-id'?: string;
            'dob-required'?: boolean;
            'file-size'?: {
                unit: string;
                value: number;
            };
            'game-content-type'?: string;
            genres?: string[];
            'is-igc-upsell'?: boolean;
            'is-multiplayer-upsell'?: boolean;
            'kamaji-relationship'?: string;
            'legal-text'?: string;
            'long-description'?: string;
            'macross-brain-context'?: string;
            'media-list'?: {
                preview: {
                    url: string;
                }[];
                promo: {
                    images: {
                        url: string;
                    }[];
                    videos: {
                        url: string;
                    }[];
                };
                screenshots: {
                    url: string;
                }[];
            };
            name?: string;
            'nsx-confirm-message'?: string;
            parent: null | {
                id: string;
                name: string;
                thumbnail: string;
                url: string;
            };
            platforms?: string[];
            'plus-reward-description'?: null;
            'primary-classification'?: string;
            'provider-name'?: string;
            'ps-camera-compatibility'?: string;
            'ps-move-compatibility'?: string;
            'ps-vr-compatibility'?: string;
            'release-date'?: string;
            'secondary-classification'?: string;
            skus?: {
                entitlements: {
                    duration: number;
                    'exp-after-first-use': number;
                }[];
                id: string;
                'is-preorder': boolean;
                multibuy: null;
                name: string;
                'playability-date': string;
                'plus-reward-description': null;
                prices: {
                    'non-plus-user': {
                        'actual-price': {
                            display: string;
                            value: number;
                        };
                        availability: {
                            'end-date': null;
                            'start-date': null;
                        };
                        'discount-percentage': number;
                        'is-plus': boolean;
                        'strikethrough-price': null;
                        'upsell-price': null;
                    };
                    'plus-user': {
                        'actual-price': {
                            display: string;
                            value: number;
                        };
                        availability: {
                            'end-date': null;
                            'start-date': null;
                        };
                        'discount-percentage': number;
                        'is-plus': boolean;
                        'strikethrough-price': null;
                        'upsell-price': null;
                    };
                };
            }[];
            'star-rating'?: {
                score: number;
                total: number;
            };
            'subtitle-language-codes'?: any[];
            'tertiary-classification'?: string;
            'thumbnail-url-base'?: string;
            'top-category'?: string;
            'upsell-info'?: null;
            'voice-language-codes'?: any[];
        };
        id: string;
        relationships: {
            children: {
                data: {
                    id: string;
                    meta?: {
                        'is-suggested': boolean;
                    };
                    type: string;
                }[];
            };
            'legacy-skus'?: {
                data: {
                    id: string;
                    meta?: {
                        'is-suggested': boolean;
                    };
                    type: string;
                }[];
            };
        };
        type: string;
    }[];
}
