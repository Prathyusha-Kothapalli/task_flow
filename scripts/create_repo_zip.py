#!/usr/bin/env python3
"""
TaskFlow TrainPlex Repository Zipper
Creates a zip package including .git history and source code while excluding node_modules/dist.
"""

import os
import sys
import zipfile
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

REPO_DIR = Path(__file__).parent.parent
OUTPUT_ZIP_WORKSPACE = REPO_DIR / "task_flow_repo.zip"
OUTPUT_ZIP_ARTIFACT = Path(r"C:\Users\HP\.gemini\antigravity-ide\brain\dc94211f-9606-45e9-8f9a-862f9a804668") / "task_flow_repo.zip"

EXCLUDE_DIRS = {"node_modules", "dist", "coverage", ".cache"}
EXCLUDE_FILES = {"task_flow_repo.zip"}

def create_zip():
    print("[ZIP] Creating TrainPlex compliant ZIP package...")
    
    zip_targets = [OUTPUT_ZIP_WORKSPACE, OUTPUT_ZIP_ARTIFACT]
    
    for target in zip_targets:
        target.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(REPO_DIR):
                # Filter out excluded directories
                dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
                
                for file in files:
                    if file in EXCLUDE_FILES or file.endswith('.pyc'):
                        continue
                    
                    file_path = Path(root) / file
                    arcname = file_path.relative_to(REPO_DIR)
                    zipf.write(file_path, arcname)
                    
        size_mb = target.stat().st_size / (1024 * 1024)
        print(f"[OK] Generated {target.name} ({size_mb:.2f} MB) at: {target}")

if __name__ == "__main__":
    create_zip()
