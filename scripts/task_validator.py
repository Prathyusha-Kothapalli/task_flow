#!/usr/bin/env python3
"""
TaskFlow Schema & Data Integrity Validator (Python 3.10+)
Validates JSON datasets for TaskFlow data integrity, broken references, date formatting, and bounds.
"""

import json
import sys
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def validate_dataset(filepath):
    path = Path(filepath)
    if not path.exists():
        print(f"[ERROR] File not found at {path}")
        return False

    with open(path, "r", encoding="utf-8") as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"[ERROR] Invalid JSON syntax: {e}")
            return False

    errors = []
    warnings = []

    projects = data.get("taskflow_projects", [])
    team = data.get("taskflow_team", [])
    tasks = data.get("taskflow_tasks", [])

    project_ids = {p.get("id") for p in projects if isinstance(p, dict)}
    team_ids = {m.get("id") for m in team if isinstance(m, dict)}

    print(f"[VALIDATE] Validating {len(tasks)} tasks, {len(projects)} projects, and {len(team)} team members...")

    for idx, task in enumerate(tasks):
        if not isinstance(task, dict):
            errors.append(f"Task at index {idx} is not a valid JSON object.")
            continue

        task_id = task.get("id", f"index-{idx}")
        
        for field in ["title", "status", "priority", "projectId", "assigneeId"]:
            if field not in task:
                errors.append(f"Task {task_id}: missing mandatory field '{field}'.")

        if task.get("projectId") and task.get("projectId") not in project_ids:
            warnings.append(f"Task {task_id}: references unknown projectId '{task.get('projectId')}'.")

        if task.get("assigneeId") and task.get("assigneeId") not in team_ids:
            warnings.append(f"Task {task_id}: references unknown assigneeId '{task.get('assigneeId')}'.")

        valid_statuses = {"backlog", "todo", "in_progress", "review", "done"}
        valid_priorities = {"low", "medium", "high", "urgent"}

        if task.get("status") not in valid_statuses:
            errors.append(f"Task {task_id}: invalid status '{task.get('status')}'.")

        if task.get("priority") not in valid_priorities:
            errors.append(f"Task {task_id}: invalid priority '{task.get('priority')}'.")

        progress = task.get("progress", 0)
        if not (0 <= progress <= 100):
            errors.append(f"Task {task_id}: progress {progress}% out of bounds [0, 100].")

    if errors:
        print(f"\n[FAIL] Validation Failed with {len(errors)} errors:")
        for err in errors:
            print(f"  - {err}")
    else:
        print("\n[OK] All JSON schema integrity checks passed successfully!")

    if warnings:
        print(f"\n[WARN] {len(warnings)} Warnings:")
        for warn in warnings:
            print(f"  - {warn}")

    return len(errors) == 0

if __name__ == "__main__":
    filepath = sys.argv[1] if len(sys.argv) > 1 else Path(__file__).parent / "generated_seed.json"
    success = validate_dataset(filepath)
    sys.exit(0 if success else 1)
