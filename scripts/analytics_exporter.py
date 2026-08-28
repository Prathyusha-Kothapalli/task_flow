#!/usr/bin/env python3
"""
TaskFlow CLI Analytics Exporter (Python 3.10+)
Parses TaskFlow JSON backup datasets and prints formatted terminal summary reports.
"""

import json
import sys
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def print_analytics_report(filepath):
    path = Path(filepath)
    if not path.exists():
        print(f"[ERROR] File {path} not found.")
        return

    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    tasks = data.get("taskflow_tasks", [])
    projects = data.get("taskflow_projects", [])
    team = data.get("taskflow_team", [])

    total_tasks = len(tasks)
    completed = len([t for t in tasks if t.get("status") == "done"])
    in_progress = len([t for t in tasks if t.get("status") == "in_progress"])
    rate = round((completed / total_tasks * 100)) if total_tasks > 0 else 0

    total_est = sum(t.get("estimatedHours", 0) for t in tasks)
    total_spent = sum(t.get("spentHours", 0) for t in tasks)

    print("\n" + "="*50)
    print("      TASKFLOW ENTERPRISE ANALYTICS REPORT      ")
    print("="*50)
    print(f" Total Projects    : {len(projects)}")
    print(f" Total Team        : {len(team)}")
    print(f" Total Tasks       : {total_tasks}")
    print(f" Completed Tasks   : {completed} ({rate}%)")
    print(f" In Progress Tasks : {in_progress}")
    print(f" Hours Tracked     : {total_spent}h spent / {total_est}h estimated")
    print("="*50)

    print("\n--- STATUS BREAKDOWN ---")
    statuses = ["backlog", "todo", "in_progress", "review", "done"]
    for s in statuses:
        count = len([t for t in tasks if t.get("status") == s])
        bar = "#" * (count // 2)
        print(f" {s.upper():<12} : {count:<4} {bar}")

    print("\n--- PRIORITY DISTRIBUTION ---")
    priorities = ["low", "medium", "high", "urgent"]
    for p in priorities:
        count = len([t for t in tasks if t.get("priority") == p])
        bar = "#" * (count // 2)
        print(f" {p.upper():<12} : {count:<4} {bar}")

    print("\n" + "="*50 + "\n")

if __name__ == "__main__":
    filepath = sys.argv[1] if len(sys.argv) > 1 else Path(__file__).parent / "generated_seed.json"
    print_analytics_report(filepath)
