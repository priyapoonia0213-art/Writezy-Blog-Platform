

async function main(prompt) {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
     body: JSON.stringify({
  model: "llama-3.3-70b-versatile", 
  messages: [{ role: "user", content: prompt }]
})
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error?.message || "API Error");
    }

    return data?.choices?.[0]?.message?.content || "No response";

  } catch (error) {
    console.error("ERROR:", error);
    return "Error: " + error.message;
  }
}

export default main;