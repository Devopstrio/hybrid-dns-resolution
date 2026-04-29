from fastapi import APIRouter
router = APIRouter()
@router.get("/")
def read_records():
    return [{"id": "r1", "name": "www", "type": "CNAME", "value": "lb.example.com", "ttl": 300}]
@router.post("/create")
def create_record():
    return {"id": "r2", "status": "created"}
