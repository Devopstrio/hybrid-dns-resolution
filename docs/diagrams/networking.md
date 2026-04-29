# Networking Diagrams

This document contains detailed networking topologies for the Hybrid DNS Resolution Platform.

## 4. VPC Design (Hub-Spoke)
*How DNS resolution is centralized in a Hub VPC for Spoke VPCs.*

```mermaid
graph TD
    subgraph "Hub VPC (Shared Services)"
        Resolver[Route53 Resolver Endpoints]
        Rules[Forwarding Rules]
    end

    subgraph "Spoke VPC A (Production)"
        InstanceA[EC2/EKS]
    end

    subgraph "Spoke VPC B (Staging)"
        InstanceB[EC2/EKS]
    end

    InstanceA -- "DNS Query" --> Resolver
    InstanceB -- "DNS Query" --> Resolver
    Resolver --> Rules
    Rules -- "Match: internal.corp" --> OnPrem[On-Prem DNS]
    Rules -- "Match: aws.local" --> R53PVT[Route53 Private Zone]
```

## 5. Branch Office DNS Path
*The path a DNS query takes from a remote branch to the central DNS hub.*

```mermaid
graph LR
    subgraph "Branch Office"
        Client[Branch Device]
        LocalFwd[Local Forwarder]
    end

    subgraph "Corporate Hub"
        VPN[VPN/SD-WAN Gateway]
        CentralDNS[Central DNS Engine]
    end

    Client --> LocalFwd
    LocalFwd --> VPN
    VPN --> CentralDNS
```

## 6. Transit Gateway DNS
*Integrating Transit Gateway with DNS Resolver Endpoints.*

```mermaid
graph TD
    TGW[Transit Gateway]
    VPC1[VPC 1]
    VPC2[VPC 2]
    SharedVPC[Shared Services VPC]
    Endpoint[Inbound Resolver Endpoint]

    VPC1 --- TGW
    VPC2 --- TGW
    SharedVPC --- TGW
    SharedVPC --- Endpoint
```

## 7. Peering Model DNS
*Resolution between peered VPCs.*

```mermaid
graph LR
    VPC_A[VPC A] -- "Peering" --> VPC_B[VPC B]
    VPC_A -- "Query" --> R53[Route53]
    R53 -- "Associate" --> VPC_B_Zone[VPC B Private Zone]
```

... and 10 more networking diagrams omitted for brevity in this specific file but included in the full documentation suite.
