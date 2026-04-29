from pydantic import BaseModel
from typing import Optional, Dict, Any

class RecordBase(BaseModel):
    zoneId: str
    name: str
    type: str
    value: str
    ttl: int = 3600
    priority: Optional[int] = None
    weight: Optional[int] = None
    metadata: Optional[Dict[str, Any]] = None

class RecordCreate(RecordBase):
    pass

class RecordUpdate(RecordBase):
    zoneId: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None
    value: Optional[str] = None

class Record(RecordBase):
    id: string
    createdAt: str
    updatedAt: str

    class Config:
        orm_mode = True
