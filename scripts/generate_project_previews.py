from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs("public/images/projects", exist_ok=True)

def create_flowops_image():
    W, H = 1280, 800
    img = Image.new("RGB", (W, H), (12, 14, 18))
    draw = ImageDraw.Draw(img)
    
    # Top bar
    draw.rectangle([(0, 0), (W, 60)], fill=(18, 21, 28))
    draw.line([(0, 60), (W, 60)], fill=(35, 42, 54), width=1)
    
    # Logo & title
    draw.text((40, 20), "FLOWOPS // ENGINEERING INTELLIGENCE", fill=(125, 228, 235))
    draw.text((W - 320, 20), "STATUS: LIVE SOCKET.IO SYNC ●", fill=(74, 222, 128))
    
    # Sidebar
    draw.rectangle([(0, 60), (240, H)], fill=(15, 18, 24))
    draw.line([(240, 60), (240, H)], fill=(30, 36, 48), width=1)
    
    nav_items = ["Overview", "PR Analytics", "Security Scanner", "Webhook Logs", "Team RBAC", "Settings"]
    for i, item in enumerate(nav_items):
        y = 100 + i * 48
        if i == 0:
            draw.rectangle([(20, y - 8), (220, y + 28)], fill=(28, 35, 48))
            draw.text((40, y), item, fill=(244, 241, 234))
        else:
            draw.text((40, y), item, fill=(140, 150, 165))
            
    # Main cards
    # Stat 1: PR Ingestion
    draw.rectangle([(280, 90), (550, 190)], fill=(20, 24, 32), outline=(40, 48, 64))
    draw.text((305, 110), "ACTIVE PR VELOCITY", fill=(150, 160, 175))
    draw.text((305, 135), "42 PRs / DAY", fill=(244, 241, 234))
    draw.text((305, 165), "+18.4% faster turnaround", fill=(74, 222, 128))
    
    # Stat 2: Automated Reviews
    draw.rectangle([(580, 90), (850, 190)], fill=(20, 24, 32), outline=(40, 48, 64))
    draw.text((605, 110), "AI REVIEWS AUTOMATED", fill=(150, 160, 175))
    draw.text((605, 135), "99.4% ACCURACY", fill=(125, 228, 235))
    draw.text((605, 165), "Anti-pattern & Security check", fill=(140, 150, 165))
    
    # Stat 3: Multi-tenant RBAC
    draw.rectangle([(880, 90), (1240, 190)], fill=(20, 24, 32), outline=(40, 48, 64))
    draw.text((905, 110), "ACCESS TIER", fill=(150, 160, 175))
    draw.text((905, 135), "LEVEL 4 STRICT RBAC", fill=(203, 164, 129))
    draw.text((905, 165), "Organization GitHub Verified", fill=(74, 222, 128))
    
    # Main Chart Box
    draw.rectangle([(280, 220), (1240, 520)], fill=(16, 20, 27), outline=(35, 42, 56))
    draw.text((310, 245), "REAL-TIME COMMIT & PR INGESTION STREAM (WEBHOOK LOAD)", fill=(244, 241, 234))
    
    # Graph grid lines
    for gy in [290, 350, 410, 470]:
        draw.line([(310, gy), (1210, gy)], fill=(28, 35, 46), width=1)
        
    # Draw glowing curve
    points = [
        (310, 450), (380, 430), (450, 380), (520, 400), (600, 340), 
        (680, 310), (760, 360), (840, 300), (920, 280), (1000, 320), 
        (1080, 270), (1160, 290), (1210, 260)
    ]
    for k in range(len(points)-1):
        draw.line([points[k], points[k+1]], fill=(125, 228, 235), width=3)
        draw.ellipse([(points[k][0]-4, points[k][1]-4), (points[k][0]+4, points[k][1]+4)], fill=(12, 14, 18), outline=(125, 228, 235), width=2)
        
    # Activity stream box
    draw.rectangle([(280, 550), (1240, 760)], fill=(16, 20, 27), outline=(35, 42, 56))
    draw.text((310, 570), "LIVE AUDIT LOGS (SOCKET.IO STREAM)", fill=(150, 160, 175))
    logs = [
        "[14:22:04] Webhook received from repository main: PR #42 approved by FlowOps Security Engine.",
        "[14:21:49] Ingestion worker finished diff parsing for 14 files (32ms execution time).",
        "[14:20:12] Stale review notification dispatched to team channel for pull request #39.",
    ]
    for idx, l in enumerate(logs):
        draw.text((310, 610 + idx * 38), l, fill=(180, 190, 205) if idx > 0 else (125, 228, 235))
        
    img.save("public/images/projects/flowops.webp", "WEBP", quality=92)
    print("Saved flowops.webp")

def create_cookgpt_image():
    W, H = 1280, 800
    img = Image.new("RGB", (W, H), (10, 12, 16))
    draw = ImageDraw.Draw(img)
    
    # Top bar
    draw.rectangle([(0, 0), (W, 64)], fill=(16, 20, 28))
    draw.line([(0, 64), (W, 64)], fill=(32, 40, 55), width=1)
    draw.text((40, 22), "COOKGPT // MULTIMODAL CULINARY AI", fill=(244, 241, 234))
    draw.text((W - 380, 22), "1ST PLACE WINNER · 10,000+ PINECONE EMBEDDINGS", fill=(125, 228, 235))
    
    # Left Panel: Multimodal Input
    draw.rectangle([(40, 90), (440, 750)], fill=(16, 20, 28), outline=(35, 44, 60))
    draw.text((65, 115), "MULTIMODAL INGREDIENT SCANNER", fill=(125, 228, 235))
    
    # Photo placeholder mockup
    draw.rectangle([(65, 155), (415, 380)], fill=(25, 32, 45), outline=(45, 58, 80))
    draw.text((120, 255), "📷  VEGETABLES & HERBS DETECTED", fill=(200, 210, 225))
    draw.text((130, 290), "Confidence: 98.7% (Gemini Vision)", fill=(74, 222, 128))
    
    draw.text((65, 410), "DETECTED INGREDIENTS:", fill=(150, 160, 175))
    items = ["✓ Bell Peppers (Fresh, Diced)", "✓ Extra Virgin Olive Oil", "✓ Feta Cheese & Basil", "✓ Garlic Cloves & Pasta"]
    for i, it in enumerate(items):
        draw.text((75, 445 + i * 36), it, fill=(244, 241, 234))
        
    draw.rectangle([(65, 620), (415, 710)], fill=(22, 28, 40), outline=(40, 50, 70))
    draw.text((85, 640), "LATENCY BENCHMARK", fill=(140, 150, 165))
    draw.text((85, 670), "⚡ 320ms Sub-Second Response", fill=(74, 222, 128))
    
    # Right Panel: Recipe & Chat Interaction
    draw.rectangle([(480, 90), (1240, 750)], fill=(14, 18, 24), outline=(35, 44, 60))
    draw.text((515, 115), "STREAMING RECIPE & NUTRITIONAL BREAKDOWN", fill=(244, 241, 234))
    
    # Recipe Card
    draw.rectangle([(515, 160), (1205, 340)], fill=(20, 26, 36), outline=(40, 52, 72))
    draw.text((545, 185), "MEDITERRANEAN ROASTED PEPPER & BASIL PASTA", fill=(125, 228, 235))
    draw.text((545, 220), "Prep Time: 15 mins  |  Cook Time: 12 mins  |  Calories: 480 kcal  |  Protein: 16g", fill=(203, 164, 129))
    draw.text((545, 260), "1. Sauté garlic and bell peppers in olive oil until tender and fragrant.", fill=(220, 225, 235))
    draw.text((545, 295), "2. Toss with al dente pasta, fresh basil ribbons, and crumble feta cheese on top.", fill=(220, 225, 235))
    
    # Query interaction
    draw.rectangle([(515, 370), (1205, 520)], fill=(18, 23, 32), outline=(35, 44, 60))
    draw.text((545, 395), "QUERY: 'Can this recipe be adapted to high-protein vegan?'", fill=(140, 150, 165))
    draw.text((545, 435), "COOKGPT: 'Substitute feta with pan-seared smoked tofu cubes and add 2 tbsp hemp seeds.", fill=(74, 222, 128))
    draw.text((545, 470), "This raises protein from 16g to 28g while keeping total cook time under 20 minutes.'", fill=(244, 241, 234))
    
    # Search & RAG Vector Info
    draw.rectangle([(515, 550), (1205, 710)], fill=(20, 26, 36), outline=(40, 52, 72))
    draw.text((545, 575), "PINECONE HYBRID VECTOR SEARCH STATS", fill=(150, 160, 175))
    draw.text((545, 610), "Top-K Matches Retrieved: 8 recipes (similarity score > 0.91)", fill=(125, 228, 235))
    draw.text((545, 645), "Dietary Metadata Filter: Vegan + Under 25 mins + High Protein", fill=(203, 164, 129))
    draw.text((545, 675), "Embeddings Model: Google Gemini Text Embedding 004", fill=(140, 150, 165))
    
    img.save("public/images/projects/cookgpt.webp", "WEBP", quality=92)
    print("Saved cookgpt.webp")

def create_devflow_image():
    W, H = 1280, 800
    img = Image.new("RGB", (W, H), (12, 13, 17))
    draw = ImageDraw.Draw(img)
    
    # Top bar
    draw.rectangle([(0, 0), (W, 60)], fill=(18, 20, 26))
    draw.line([(0, 60), (W, 60)], fill=(34, 38, 50), width=1)
    draw.text((40, 20), "DEVFLOW // WORKFLOW AUTOMATION & ORCHESTRATION", fill=(203, 164, 129))
    draw.text((W - 320, 20), "FEATURED ON DEVPOST ●", fill=(125, 228, 235))
    
    # 4 Pipeline Stage Cards
    stages = [
        ("01 / INGEST", "Git Push & Webhook", "SHA 7f89b1c", (125, 228, 235)),
        ("02 / ANALYZE", "ESLint & Typecheck", "0 Errors Found", (74, 222, 128)),
        ("03 / CONTAINERIZE", "Docker Image Build", "Alpine Multi-stage", (203, 164, 129)),
        ("04 / DEPLOY", "Staging Cluster", "Healthcheck 200 OK", (125, 228, 235)),
    ]
    for i, (title, sub, meta, col) in enumerate(stages):
        x = 40 + i * 305
        draw.rectangle([(x, 90), (x + 285, 230)], fill=(19, 22, 29), outline=(38, 44, 58))
        draw.text((x + 20, 110), title, fill=col)
        draw.text((x + 20, 145), sub, fill=(244, 241, 234))
        draw.text((x + 20, 185), meta, fill=(140, 150, 165))
        
    # Large Logs / Metrics Dashboard
    draw.rectangle([(40, 260), (1240, 740)], fill=(16, 18, 24), outline=(35, 40, 54))
    draw.text((65, 285), "ACTIVE PIPELINE TELEMETRY & CONTAINER HEALTH", fill=(244, 241, 234))
    
    # Internal sub-boxes
    draw.rectangle([(65, 330), (620, 710)], fill=(20, 23, 31), outline=(40, 46, 62))
    draw.text((85, 355), "AUTOMATED WORKFLOW CONSOLE", fill=(150, 160, 175))
    pipeline_lines = [
        "[INFO] Initiating build for commit 7f89b1c on branch main.",
        "[INFO] Next.js production build compiled in 8.4s.",
        "[INFO] Running database migrations with Prisma on PostgreSQL.",
        "[SUCCESS] 32 test suites passed (148 tests total).",
        "[INFO] Generating optimized Docker layer cache.",
        "[SUCCESS] Container image published to private registry.",
        "[READY] Live deployment accessible on staging endpoint.",
    ]
    for idx, pl in enumerate(pipeline_lines):
        color = (74, 222, 128) if "[SUCCESS]" in pl or "[READY]" in pl else (180, 190, 205)
        draw.text((85, 400 + idx * 42), pl, fill=color)
        
    draw.rectangle([(660, 330), (1215, 710)], fill=(20, 23, 31), outline=(40, 46, 62))
    draw.text((680, 355), "INFRASTRUCTURE & RUNTIME STATS", fill=(150, 160, 175))
    draw.text((680, 400), "CPU Utilization: 14% (Node.js Cluster)", fill=(125, 228, 235))
    draw.text((680, 445), "Memory Consumption: 248MB / 1024MB", fill=(203, 164, 129))
    draw.text((680, 490), "API Latency p99: 44ms", fill=(74, 222, 128))
    draw.text((680, 535), "WebSocket Active Connections: 1,420", fill=(244, 241, 234))
    draw.text((680, 580), "Database Queries: Sub-5ms indexed lookups", fill=(180, 190, 205))
    draw.text((680, 625), "Uptime: 99.98% over last 30 days", fill=(74, 222, 128))
    
    img.save("public/images/projects/devflow.webp", "WEBP", quality=92)
    print("Saved devflow.webp")

if __name__ == "__main__":
    create_flowops_image()
    create_cookgpt_image()
    create_devflow_image()
