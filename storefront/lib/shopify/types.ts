export type Menu = {
    title: string;
    path: string;
}

export type shopiMenuOperation = {
    data:{
        menu: {
            item: {
                title: string;
                url: string;
            };
        };
    };
    variables: {
        handle: string;
    };
}