interface ResponseJson {
    message: string;
    user?: object;
    isAuthenticated?: boolean; 
    accessToken?: string;
    image?: string;
    error?: any;
}