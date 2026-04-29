from fastapi import APIRouter
router = APIRouter()
@router.get("/audit")
def get_audit_logs():
    return [{"id": "a1", "action": "CREATE_RECORD", "user": "admin", "timestamp": "2026-04-29T10:00:00Z"}]
