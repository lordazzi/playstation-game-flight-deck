export interface FiltersResultSet {
    data: {
        attributes: {
            name: string;
            navigation: {
                id: string;
                name: string;
                'route-name': string;
                submenu: {
                    items: {
                        'is-separator': boolean;
                        name: string;
                        'target-container-id': string;
                        'target-container-type': string;
                        'template-def-id'?: number | null;
                    }[];
                    name: string;
                    'target-container-id': string;
                    'template-def-id'?: number | null;
                }[];
                'target-container-id': string;
            }[];
        };
        id: string;
        relationships: {
            children: {
                data: {
                    id: string;
                    type: string;
                }[];
            };
            'legacy-skus': {
                data: any[];
            };
        };
        type: string;
    };
    included: any[];
}

