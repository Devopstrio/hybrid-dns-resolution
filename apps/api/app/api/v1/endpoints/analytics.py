from fastapi import APIRouter
router = APIRouter()
@router.get("/summary")
def get_summary():
    return {"total_queries": 1500000, "uptime": 99.99, "active_zones": 45}
@router.get("/latency")
def get_latency():
    return [{"region": "us-east-1", "latency": 12}, {"region": "eu-west-1", "latency": 15}]
