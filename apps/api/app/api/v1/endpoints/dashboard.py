from fastapi import APIRouter
router = APIRouter()
@router.get("/summary")
def get_dashboard_summary():
    return {"active_resolvers": 8, "total_zones": 458, "drift_status": "NONE"}
