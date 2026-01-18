
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="FinBot API")

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
def chat(req: ChatRequest):
    msg = req.message.lower()
    if "budget" in msg:
        reply = "A popular budgeting rule is 50/30/20: needs, wants, savings."
    elif "invest" in msg:
        reply = "You can start investing with SIPs and index funds."
    else:
        reply = "I can help with banking, tax, budgeting, and investments."
    return {"reply": reply}
