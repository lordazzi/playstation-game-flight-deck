export interface FindBoardNameResultSet {
    header: {
        status_code: string;
        message_key: string;
        details: null;
        errorUUID: null;
    };
    data: {
        base_url: string;
        search_url: string;
        root_url: string;
        tumbler_url: string;
        external_signin_url: string;
        psplus_url: string;
        events_env: string;
        rec_url: string;
        psPlusWelcomeMatUrl: string;
        psPlusDealsUrl: string;
    };
}
