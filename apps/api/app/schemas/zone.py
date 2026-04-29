from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from datetime import datetime

class ZoneBase(BaseModel):
    name: str
    provider: str
    description: Optional[str] = None
    isPrivate: bool = False
    metadata: Optional[Dict[str, Any]] = None

class ZoneCreate(ZoneBase):
    pass

class ZoneUpdate(ZoneBase):
    name: Optional[str] = None
    provider: Optional[str] = None

class Zone(ZoneBase):
    id: str
    status: str
    createdAt: str
    updatedAt: str

    class Config:
        orm_mode = True
