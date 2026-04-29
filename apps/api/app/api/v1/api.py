from fastapi import APIRouter
from app.api.v1.endpoints import zones, records, auth, analytics, health, sync, failover, security, dashboard

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(zones.router, prefix="/zones", tags=["zones"])
api_router.include_router(records.router, prefix="/records", tags=["records"])
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
api_router.include_router(health.router, prefix="/health", tags=["health"])
api_router.include_router(sync.router, prefix="/sync", tags=["sync"])
api_router.include_router(failover.router, prefix="/failover", tags=["failover"])
api_router.include_router(security.router, prefix="/security", tags=["security"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
