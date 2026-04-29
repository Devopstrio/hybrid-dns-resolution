# Security Diagrams

## 41. OIDC Auth Flow
*How users authenticate via the corporate identity provider.*

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant OIDC_Provider

    User->>Frontend: Click Login
    Frontend->>OIDC_Provider: Redirect to Login
    OIDC_Provider-->>User: Auth Page
    User->>OIDC_Provider: Provide Credentials
    OIDC_Provider-->>Frontend: Auth Code
    Frontend->>API: Exchange Code for Token
    API->>OIDC_Provider: Validate Code
    OIDC_Provider-->>API: User Info / Claims
    API-->>Frontend: JWT Access Token
```

## 42. RBAC Model
*Permissions structure for teams.*

```mermaid
graph TD
    AdminRole[Admin Role]
    NetEngRole[Network Eng Role]
    ReadRole[ReadOnly Role]

    AdminRole --> CreateZone
    AdminRole --> DeleteZone
    AdminRole --> ManageUsers

    NetEngRole --> CreateRecord
    NetEngRole --> UpdateRecord
    NetEngRole --> ViewAnalytics

    ReadRole --> ViewAnalytics
```

## 43. Secrets Workflow
*Managing API keys for cloud providers.*

```mermaid
graph LR
    Input[User Enters AWS Secret] --> Encrypt[Encrypt with KMS/Vault]
    Encrypt --> Store[Store in Secure DB]
    Worker --> Fetch[Fetch Encrypted Secret]
    Fetch --> Decrypt[Decrypt at Runtime]
    Decrypt --> Use[Authenticate with Cloud API]
```

## 44. Audit Logging Flow
```mermaid
graph TD
    Action[User Action] --> Sign[Sign Payload]
    Sign --> Log[Write to Audit Log]
    Log --> Export[Export to SIEM/S3]
```
