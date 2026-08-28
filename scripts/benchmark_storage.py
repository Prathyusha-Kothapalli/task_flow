#!/usr/bin/env python3
"""
TaskFlow Storage Benchmark Script (Python 3.10+)
Simulates creation and memory footprint benchmark for 10,000 tasks.
"""

import time
import sys
from seed_generator import generate_seed_data

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def run_benchmark():
    print("[BENCHMARK] Running TaskFlow 10,000 Tasks Performance Stress Benchmark...")
    start_time = time.time()

    data = generate_seed_data(10000)
    
    elapsed = time.time() - start_time
    task_count = len(data["taskflow_tasks"])
    json_bytes = len(str(data).encode("utf-8"))
    json_mb = json_bytes / (1024 * 1024)

    print(f"[OK] Generated {task_count:,} tasks in {elapsed:.3f} seconds.")
    print(f"[METRIC] Memory Payload Size: {json_mb:.2f} MB")
    print(f"[METRIC] Performance Velocity: {round(task_count / elapsed):,} tasks/sec")

if __name__ == "__main__":
    run_benchmark()
