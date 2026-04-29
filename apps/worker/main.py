import time
import logging
from redis import Redis
from app.core.config import settings

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

redis = Redis(host=settings.REDIS_HOST, port=settings.REDIS_PORT)

def process_tasks():
    logger.info("Worker started. Listening for DNS tasks...")
    while True:
        # Simulate processing queue
        task = redis.blpop("dns_tasks", timeout=5)
        if task:
            logger.info(f"Processing task: {task}")
            # Logic for sync, drift detection, etc.
        time.sleep(1)

if __name__ == "__main__":
    process_tasks()
