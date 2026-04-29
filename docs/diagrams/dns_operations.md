# DNS Operations Diagrams

## 21. Zone Sync Flow
*The process of synchronizing zones between the platform and cloud providers.*

```mermaid
sequenceDiagram
    participant Platform
    participant Worker
    participant Redis
    participant Cloud_API

    Platform->>Redis: Queue Sync Job (Zone ID)
    Worker->>Redis: Pop Job
    Worker->>Cloud_API: Fetch Current State
    Cloud_API-->>Worker: State Data
    Worker->>Worker: Compare with Platform Desired State
    alt Drift Detected
        Worker->>Cloud_API: Update Records
        Cloud_API-->>Worker: Success
    end
    Worker->>Platform: Mark Sync Complete
```

## 22. Record Lifecycle
*The lifecycle of a DNS record from creation to deletion.*

```mermaid
stateDiagram-v2
    [*] --> Requested
    Requested --> Approved: Manual/Auto Approval
    Approved --> Provisioning
    Provisioning --> Active: Successful Sync
    Active --> Updating
    Updating --> Active
    Active --> Deleting
    Deleting --> [*]
```

## 23. Drift Detection Flow
*Continuous monitoring of DNS consistency.*

```mermaid
graph TD
    Trigger[Scheduled Job] --> Fetch[Fetch Cloud Records]
    Fetch --> Compare[Compare with DB]
    Compare -- "Match" --> OK[Log: No Change]
    Compare -- "Mismatch" --> Alert[Raise Drift Alert]
    Alert --> Notify[Notify Slack/Email]
    Alert --> Remediation[Auto-Remediate?]
```

## 24. TTL Optimization Flow
```mermaid
graph LR
    Analyze[Analyze Query Frequency] --> Recommend[Recommend TTL Change]
    Recommend --> Apply[Update Record TTL]
```

## 25. Split Horizon Model
```mermaid
graph TD
    Query[Query: app.corp] --> Source{Source IP?}
    Source -- "Internal" --> ResultA[Result: 10.0.1.5]
    Source -- "External" --> ResultB[Result: 203.0.113.1]
```
