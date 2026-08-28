#!/usr/bin/env python3
"""
TaskFlow Seed Dataset Generator (Python 3.10+)
Generates a complete, validated TaskFlow JSON dataset with configurable task counts.
"""

import json
import sys
from datetime import datetime, timedelta
from pathlib import Path

# Ensure UTF-8 output encoding for Windows terminal compatibility
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def generate_seed_data(task_count=52):
    now = datetime.now()
    
    team_members = [
        {"id": "tm-1", "name": "Alex Morgan", "email": "alex.m@taskflow.com", "role": "Product Manager", "avatar": "AM", "color": "#6366f1"},
        {"id": "tm-2", "name": "Sarah Chen", "email": "sarah.c@taskflow.com", "role": "Lead Architect", "avatar": "SC", "color": "#10b981"},
        {"id": "tm-3", "name": "Marcus Vance", "email": "marcus.v@taskflow.com", "role": "Senior Frontend Engineer", "avatar": "MV", "color": "#f59e0b"},
        {"id": "tm-4", "name": "Elena Rostova", "email": "elena.r@taskflow.com", "role": "UI/UX Design Director", "avatar": "ER", "color": "#ec4899"},
        {"id": "tm-5", "name": "David Kim", "email": "david.k@taskflow.com", "role": "DevOps & Cloud Specialist", "avatar": "DK", "color": "#8b5cf6"}
    ]

    projects = [
        {
            "id": "proj-1",
            "name": "Enterprise Mobile App v2.0",
            "description": "Next-generation iOS & Android companion app for enterprise workflow automation.",
            "category": "Mobile Development",
            "color": "#6366f1",
            "startDate": "2026-07-01",
            "endDate": "2026-10-15",
            "budgetHours": 320,
            "status": "active"
        },
        {
            "id": "proj-2",
            "name": "Cloud Infrastructure Migration",
            "description": "Migrating legacy monolithic microservices to Kubernetes clusters with CI/CD.",
            "category": "DevOps & Infra",
            "color": "#8b5cf6",
            "startDate": "2026-06-15",
            "endDate": "2026-09-30",
            "budgetHours": 240,
            "status": "active"
        },
        {
            "id": "proj-3",
            "name": "Design System & Component Library",
            "description": "Unified accessible design tokens, dark mode guidelines, and reusable web components.",
            "category": "UI/UX Design",
            "color": "#ec4899",
            "startDate": "2026-08-01",
            "endDate": "2026-11-01",
            "budgetHours": 180,
            "status": "active"
        },
        {
            "id": "proj-4",
            "name": "AI Analytics & Reporting Engine",
            "description": "Interactive real-time data dashboard featuring predictive velocity metrics.",
            "category": "Data Engineering",
            "color": "#10b981",
            "startDate": "2026-07-15",
            "endDate": "2026-12-01",
            "budgetHours": 400,
            "status": "active"
        }
    ]

    statuses = ["backlog", "todo", "in_progress", "review", "done"]
    priorities = ["low", "medium", "high", "urgent"]
    labels_pool = ["Frontend", "Backend", "UI Design", "DevOps", "Security", "Database", "Performance"]

    tasks = []
    for i in range(1, task_count + 1):
        proj = projects[i % len(projects)]
        member = team_members[i % len(team_members)]
        status = statuses[i % len(statuses)]
        priority = priorities[i % len(priorities)]
        
        due_offset = (i % 20) - 5
        due_date = (now + timedelta(days=due_offset)).strftime("%Y-%m-%d")
        created_date = (now - timedelta(days=30 - (i % 15))).isoformat()

        est_hours = 8 + (i % 12)
        spent_hours = est_hours if status == "done" else (est_hours // 2 if status == "in_progress" else 0)
        progress = 100 if status == "done" else (50 if status == "in_progress" else 0)

        tasks.append({
            "id": f"tsk-{1000 + i}",
            "projectId": proj["id"],
            "title": f"Production Task Module #{i}: {proj['category']} Optimization",
            "description": f"Detailed requirement scope for Task #{i}. Comprehensive execution and testing.",
            "assigneeId": member["id"],
            "assigneeName": member["name"],
            "assigneeAvatar": member["avatar"],
            "priority": priority,
            "status": status,
            "dueDate": due_date,
            "createdAt": created_date,
            "labels": [labels_pool[i % len(labels_pool)]],
            "estimatedHours": est_hours,
            "spentHours": spent_hours,
            "progress": progress,
            "archived": False,
            "checklist": [
                {"id": f"chk-{i}-1", "text": "Requirement analysis", "completed": True},
                {"id": f"chk-{i}-2", "text": "Implementation & testing", "completed": status == "done"}
            ],
            "comments": [
                {
                    "id": f"cmt-{i}-1",
                    "authorName": member["name"],
                    "authorAvatar": member["avatar"],
                    "text": "Initial setup verified and committed.",
                    "timestamp": (now - timedelta(hours=i % 24)).isoformat()
                }
            ]
        })

    dataset = {
        "taskflow_team": team_members,
        "taskflow_projects": projects,
        "taskflow_tasks": tasks
    }

    return dataset

if __name__ == "__main__":
    count = int(sys.argv[1]) if len(sys.argv) > 1 else 52
    output_path = Path(__file__).parent / "generated_seed.json"
    data = generate_seed_data(count)
    
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        
    print(f"[OK] Generated {len(data['taskflow_tasks'])} seed tasks successfully at: {output_path}")
