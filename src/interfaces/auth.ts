
export interface ITokens {
    access_token: string,
    refresh_token: string,
}

export interface ITokensResponse extends ITokens {
    expires_in: number
    is_dispatch_enabled: true,
    is_eula_accepted: false,
    is_user_verified: true,
    jti: string,
    scope: string,
    token_type: string,
}