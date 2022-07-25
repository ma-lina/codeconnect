interface ResponseJson {
    message: string;
    user?: object;
    isAuthenticated?: boolean; 
    token?: string;
    image?: string;
    error?: any;
}