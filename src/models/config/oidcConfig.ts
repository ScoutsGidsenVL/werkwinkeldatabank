import Serializable from '../../interfaces/serializable'

export default class OidcConfig implements Serializable<OidcConfig> {
                 serverBaseUrl!: string
                 serverTokenEndpoint!: string
                 serverRefreshEndpoint!: string
                 authEndpoint!: string
                 logoutEndpoint!: string
                 clientId!: string
                 baseUrl!: string
                 InternalRedirectUrl!: string

                 deserialize (input: any) {
                   this.baseUrl = input.baseUrl
                   this.serverBaseUrl = input.serverBaseUrl
                   this.authEndpoint = input.authEndpoint
                   this.logoutEndpoint = input.logoutEndpoint
                   this.clientId = input.clientId
                   this.InternalRedirectUrl = input.InternalRedirectUrl

                   return this
                 }
}
