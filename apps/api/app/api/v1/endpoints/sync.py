from fastapi import APIRouter
router = APIRouter()
@router.post("/run")
def run_sync():
    return {"status": "started", "job_id": "sync-123"}
