export type Menu = {
    title: string;
    path: string;
}

export type ShopifyMenuOperation = {
    data:{
        menu: {
            item: {
                title: string;
                url: string;
            }[];
        };
    };
    variables: {
        handle: string;
    };
}