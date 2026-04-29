from fastapi import APIRouter, Depends, HTTPException
from typing import List
from app.schemas.zone import Zone, ZoneCreate, ZoneUpdate

router = APIRouter()

@router.get("/", response_model=List[Zone])
def read_zones():
    # Mock data
    return [
        {"id": "z1", "name": "example.com", "provider": "AWS", "isPrivate": False, "status": "ACTIVE", "createdAt": "2026-01-01", "updatedAt": "2026-01-01"},
        {"id": "z2", "name": "internal.corp", "provider": "AZURE", "isPrivate": True, "status": "ACTIVE", "createdAt": "2026-01-01", "updatedAt": "2026-01-01"}
    ]

@router.post("/create", response_model=Zone)
def create_zone(zone_in: ZoneCreate):
    return {"id": "new-zone-id", **zone_in.dict(), "status": "ACTIVE", "createdAt": "2026-04-29", "updatedAt": "2026-04-29"}

@router.put("/update/{zone_id}", response_model=Zone)
def update_zone(zone_id: str, zone_in: ZoneUpdate):
    return {"id": zone_id, **zone_in.dict(), "status": "ACTIVE", "createdAt": "2026-01-01", "updatedAt": "2026-04-29"}

@router.delete("/delete/{zone_id}")
def delete_zone(zone_id: str):
    return {"status": "deleted", "id": zone_id}
