import React from "react";
import ArticleLayout from "../../components/ArticleLayout.jsx";

const LangChainPost = () => {
  return (
    <ArticleLayout
      tag="AI Engineering"
      title="Complete Guide to Getting Started with LangChain"
      subtitle="Architecture, RAG, agents, real applications and how LangChain connects LLMs with production software systems."
      date="January 2026"
      readingTime="12 min read"
    >
      <h2>Introduction</h2>
      <p>The biggest job opportunity created by artificial intelligence is not necessarily building new AI models, but building the invisible infrastructure that connects AI with real companies.</p>
      <p>Today, most organizations still work with:</p>
      <ul>
        <li>legacy systems</li>
        <li>old databases</li>
        <li>scattered documents</li>
        <li>disconnected internal tools</li>
      </ul>
      <p>These systems were never designed to work with modern language models like GPT, Claude, or Llama.</p>
      <p>Even though AI technology has advanced very fast, the reality is that most companies still do not have data ready to be used by AI systems.</p>
      <p>This created a new demand in the industry: engineers capable of building the "bridges" between traditional business systems and modern AI architectures.</p>
      <p>In practice, this work usually includes:</p>
      <ul>
        <li>connecting APIs</li>
        <li>cleaning and structuring data</li>
        <li>processing documents</li>
        <li>building data pipelines</li>
        <li>creating RAG systems</li>
        <li>integrating language models into real applications</li>
      </ul>
      <p>This is exactly where frameworks like LangChain became important.</p>
      <p>LangChain quickly became one of the most popular tools in AI Engineering because it allows developers to orchestrate:</p>
      <ul>
        <li>language models</li>
        <li>external tools</li>
        <li>databases</li>
        <li>memory</li>
        <li>workflows</li>
        <li>AI agents</li>
      </ul>
      <p>In this article we will cover:</p>
      <ul>
        <li>what LangChain really is</li>
        <li>how it works internally</li>
        <li>its main components</li>
        <li>what tools you should learn</li>
        <li>how to build applications with open-source models</li>
        <li>how to integrate LangChain with FastAPI</li>
        <li>and finally, we will build a small demo using a local open-source model</li>
      </ul>
      <h2>What is LangChain?</h2>
      <p>LangChain is a framework for building applications powered by Large Language Models (LLMs).</p>
      <p>Its main goal is to connect AI models with:</p>
      <ul>
        <li>APIs</li>
        <li>databases</li>
        <li>documents</li>
        <li>memory</li>
        <li>tools</li>
        <li>workflows</li>
        <li>external systems</li>
      </ul>
      <p>In simple words:</p>
      <blockquote>LangChain is the orchestration layer between an LLM and a real application.</blockquote>
      <p>A model like GPT by itself only receives text and generates text.</p>
      <p>But real applications need much more:</p>
      <ul>
        <li>document retrieval</li>
        <li>semantic search</li>
        <li>APIs</li>
        <li>memory</li>
        <li>tools</li>
        <li>automation</li>
        <li>workflows</li>
      </ul>
      <p>LangChain helps organize all this complexity.</p>
      <h2>The Problem LangChain Solves</h2>
      <p>When developers work directly with the OpenAI API, they usually write something like this:</p>
      <pre className="article-code"><code className="language-python">{`response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "Hello"}
    ]
)`}</code></pre>
      <p>This works for simple tests, but real applications quickly become more complex.</p>
      <p>Questions start appearing:</p>
      <ul>
        <li>How do we add memory?</li>
        <li>How do we connect tools?</li>
        <li>How do we build RAG?</li>
        <li>How do we process documents?</li>
        <li>How do we organize prompts?</li>
        <li>How do we create AI agents?</li>
        <li>How do we monitor the system?</li>
      </ul>
      <p>This is where LangChain becomes useful.</p>
      <h2>Understanding LangChain Architecture</h2>
      <p>The easiest way to understand LangChain is to see it as a middle layer:</p>
      <pre className="article-code"><code className="language-text">{`User
   ↓
FastAPI / Backend
   ↓
LangChain
   ↓
LLM`}</code></pre>
      <p>In real applications, the architecture usually looks more like this:</p>
      <pre className="article-code"><code className="language-text">{`User
   ↓
Agent
   ↓
Retriever
   ↓
Vector Database
   ↓
LLM
   ↓
Tools / APIs
   ↓
Response`}</code></pre>
      <p>LangChain coordinates all these components.</p>
      <h2>Main Components of LangChain</h2>
      <h2>1. Models</h2>
      <p>LangChain can connect to many different models:</p>
      <ul>
        <li>OpenAI</li>
        <li>Claude</li>
        <li>Gemini</li>
        <li>Llama</li>
        <li>Mistral</li>
        <li>DeepSeek</li>
        <li>Ollama</li>
        <li>HuggingFace</li>
      </ul>
      <p>Example:</p>
      <pre className="article-code"><code className="language-python">{`from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o")`}</code></pre>
      <h2>2. Prompts</h2>
      <p>Prompts can be created dynamically using templates.</p>
      <pre className="article-code"><code className="language-python">{`from langchain.prompts import PromptTemplate

prompt = PromptTemplate.from_template(
    "Explain {topic} in simple words"
)`}</code></pre>
      <p>This allows reusable and dynamic prompts.</p>
      <h2>3. Chains</h2>
      <p>One of the most important concepts in LangChain is the idea of Chains.</p>
      <p>A chain is simply a sequence of steps that process information until a final response is generated.</p>
      <p>The basic idea looks like this:</p>
      <pre className="article-code"><code className="language-text">{`Input → Prompt → LLM → Output`}</code></pre>
      <p>For example:</p>
      <ol>
        <li>The user sends a question</li>
        <li>A prompt is created</li>
        <li>The model generates a response</li>
        <li>The response is processed</li>
      </ol>
      <p>This entire flow can be represented as a chain.</p>
      <h3>Why do Chains exist?</h3>
      <p>Because real AI applications rarely use only one model call.</p>
      <p>Usually we need to:</p>
      <ul>
        <li>transform data</li>
        <li>validate input</li>
        <li>retrieve documents</li>
        <li>call tools</li>
        <li>format responses</li>
        <li>combine multiple steps</li>
      </ul>
      <p>Chains help organize this logic in a clean and reusable way.</p>
      <h3>Conceptual Example</h3>
      <p>Imagine an application that answers questions about technical documentation.</p>
      <p>The flow could look like this:</p>
      <pre className="article-code"><code className="language-text">{`User Question
        ↓
Search Relevant Documents
        ↓
Build Context
        ↓
Send Context to LLM
        ↓
Generate Response`}</code></pre>
      <p>All this can be modeled as a chain.</p>
      <h2>4. LCEL (LangChain Expression Language)</h2>
      <p>LCEL is the modern way to build chains in LangChain.</p>
      <p>Older versions of LangChain used more complex classes and abstractions. LCEL introduced a much simpler and cleaner syntax.</p>
      <p>LCEL connects components using pipe operators.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-python">{`chain = prompt | llm`}</code></pre>
      <p>This means:</p>
      <pre className="article-code"><code className="language-text">{`Prompt → LLM`}</code></pre>
      <p>The output of the prompt automatically becomes the input of the model.</p>
      <h3>Why is LCEL important?</h3>
      <p>Because it allows developers to build complex AI pipelines very easily.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-python">{`chain = prompt | llm | parser`}</code></pre>
      <p>Internally this works like this:</p>
      <pre className="article-code"><code className="language-text">{`Input
  ↓
Prompt
  ↓
LLM
  ↓
Parser
  ↓
Final Output`}</code></pre>
      <p>Each component receives the output from the previous component.</p>
      <h3>Real Example</h3>
      <pre className="article-code"><code className="language-python">{`from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

prompt = ChatPromptTemplate.from_template(
    "Explain {topic} in simple words"
)

llm = ChatOpenAI(model="gpt-4o")

chain = prompt | llm

response = chain.invoke({
    "topic": "LangChain"
})

print(response.content)`}</code></pre>
      <h3>What happens internally?</h3>
      <p>When we execute:</p>
      <pre className="article-code"><code className="language-python">{`chain.invoke({
    "topic": "LangChain"
})`}</code></pre>
      <p>LangChain automatically:</p>
      <ol>
        <li>Inserts the value into the template</li>
        <li>Builds the final prompt</li>
        <li>Sends the prompt to the model</li>
        <li>Receives the response</li>
        <li>Returns the final result</li>
      </ol>
      <p>Everything is handled inside the chain.</p>
      <h3>The Real Power of LCEL</h3>
      <p>LCEL can connect much more than prompts and models.</p>
      <p>It can also connect:</p>
      <ul>
        <li>retrievers</li>
        <li>tools</li>
        <li>APIs</li>
        <li>memory</li>
        <li>parsers</li>
        <li>workflows</li>
      </ul>
      <p>Example:</p>
      <pre className="article-code"><code className="language-text">{`Question
   ↓
Retriever
   ↓
Context
   ↓
Prompt
   ↓
LLM
   ↓
Parser
   ↓
Final Response`}</code></pre>
      <p>This is what makes it possible to build:</p>
      <ul>
        <li>RAG systems</li>
        <li>AI agents</li>
        <li>copilots</li>
        <li>enterprise workflows</li>
      </ul>
      <h2>5. Memory</h2>
      <p>Memory allows the system to remember previous interactions.</p>
      <p>Examples:</p>
      <ul>
        <li>chat history</li>
        <li>user preferences</li>
        <li>accumulated context</li>
      </ul>
      <h2>6. Tools</h2>
      <p>Tools allow models to interact with external systems.</p>
      <p>Examples:</p>
      <ul>
        <li>APIs</li>
        <li>SQL databases</li>
        <li>web search</li>
        <li>file systems</li>
        <li>CRMs</li>
      </ul>
      <p>Example:</p>
      <pre className="article-code"><code className="language-python">{`from langchain.tools import tool

@tool
def get_weather(city: str):
    return "28°C"`}</code></pre>
      <h2>7. Agents</h2>
      <p>Agents allow the model to make decisions.</p>
      <p>For example:</p>
      <ul>
        <li>choosing which tool to use</li>
        <li>deciding when to use it</li>
        <li>solving complex tasks</li>
      </ul>
      <p>AI Agents are currently one of the most important areas in modern AI development.</p>
      <h2>What is RAG?</h2>
      <p>RAG means:</p>
      <blockquote>Retrieval-Augmented Generation</blockquote>
      <p>It is a technique where the model retrieves external information before generating a response.</p>
      <p>Simple architecture:</p>
      <pre className="article-code"><code className="language-text">{`Question
   ↓
Retriever
   ↓
Vector Database
   ↓
Relevant Chunks
   ↓
LLM
   ↓
Response`}</code></pre>
      <p>This makes it possible to build:</p>
      <ul>
        <li>chat with PDFs</li>
        <li>internal assistants</li>
        <li>enterprise search</li>
        <li>knowledge bases</li>
        <li>AI copilots</li>
      </ul>
      <h2>How does a RAG system work?</h2>
      <h3>Step 1 — Load Documents</h3>
      <p>The system processes:</p>
      <ul>
        <li>PDFs</li>
        <li>DOCX files</li>
        <li>web pages</li>
        <li>databases</li>
        <li>Notion</li>
        <li>Confluence</li>
      </ul>
      <h3>Step 2 — Chunking</h3>
      <p>Documents are divided into smaller pieces called chunks.</p>
      <pre className="article-code"><code className="language-text">{`Document → Chunks`}</code></pre>
      <h3>Step 3 — Embeddings</h3>
      <p>Each chunk is converted into a semantic vector.</p>
      <pre className="article-code"><code className="language-text">{`Text → Embedding → Vector`}</code></pre>
      <h3>Step 4 — Vector Database</h3>
      <p>Vectors are stored inside:</p>
      <ul>
        <li>Pinecone</li>
        <li>Qdrant</li>
        <li>Chroma</li>
        <li>Weaviate</li>
        <li>FAISS</li>
      </ul>
      <h3>Step 5 — Retrieval</h3>
      <p>When the user asks a question:</p>
      <ul>
        <li>the question becomes an embedding</li>
        <li>the system searches similar vectors</li>
        <li>relevant chunks are retrieved</li>
      </ul>
      <h3>Step 6 — Generation</h3>
      <p>The LLM generates a response using the retrieved context.</p>
      <h2>What is LangGraph?</h2>
      <p>LangChain evolved a lot during the last year.</p>
      <p>Initially it focused mostly on linear chains.</p>
      <p>Today the ecosystem is focused on:</p>
      <ul>
        <li>AI Agents</li>
        <li>complex workflows</li>
        <li>stateful systems</li>
        <li>multi-step reasoning</li>
      </ul>
      <p>This is why LangGraph was created.</p>
      <p>LangGraph allows developers to build:</p>
      <ul>
        <li>execution graphs</li>
        <li>persistent agents</li>
        <li>branching workflows</li>
        <li>loops</li>
        <li>human-in-the-loop systems</li>
      </ul>
      <p>Conceptual example:</p>
      <pre className="article-code"><code className="language-text">{`Node A → Node B
       ↘ Node C`}</code></pre>
      <h2>What Languages Does LangChain Support?</h2>
      <p>Mainly:</p>
      <ul>
        <li>Python</li>
        <li>TypeScript</li>
      </ul>
      <p>Python currently dominates the AI ecosystem.</p>
      <h2>Tools You Should Learn</h2>
      <h3>Python</h3>
      <p>Almost mandatory for AI Engineering.</p>
      <h3>REST APIs</h3>
      <p>Important for integrating:</p>
      <ul>
        <li>OpenAI</li>
        <li>Pinecone</li>
        <li>Slack</li>
        <li>Notion</li>
        <li>CRMs</li>
      </ul>
      <h3>Vector Databases</h3>
      <p>Essential for RAG systems.</p>
      <h3>Embeddings</h3>
      <p>Critical for semantic search.</p>
      <h3>FastAPI</h3>
      <p>FastAPI became one of the most popular frameworks for deploying AI applications.</p>
      <p>Typical architecture:</p>
      <pre className="article-code"><code className="language-text">{`Frontend
   ↓
FastAPI
   ↓
LangChain
   ↓
LLM`}</code></pre>
      <h2>Does LangChain Work with Open-Source Models?</h2>
      <p>Yes.</p>
      <p>LangChain is not tied to OpenAI.</p>
      <p>It can work with:</p>
      <ul>
        <li>Llama 3</li>
        <li>Mistral</li>
        <li>DeepSeek</li>
        <li>Gemma</li>
        <li>Phi</li>
        <li>local models</li>
      </ul>
      <p>The most popular combination today is:</p>
      <pre className="article-code"><code className="language-text">{`LangChain + Ollama + Llama 3`}</code></pre>
      <h2>What is Ollama?</h2>
      <p>Ollama allows developers to run open-source models locally.</p>
      <p>Example:</p>
      <pre className="article-code"><code className="language-bash">{`ollama pull llama3`}</code></pre>
      <p>Then it can be connected to LangChain:</p>
      <pre className="article-code"><code className="language-python">{`from langchain_ollama import ChatOllama

llm = ChatOllama(model="llama3")`}</code></pre>
      <h2>Real Use Cases</h2>
      <pre className="article-code"><code className="language-text">{`
- Enterprise Chatbots
- RAG Systems
- Chat with Documents
- AI Agents
- Enterprise Automation
- Internal Copilots
`}</code></pre>
      <h2>Demo</h2>
      <p>In the next section we will build a small application using:</p>
      <ul>
        <li>FastAPI</li>
        <li>LangChain</li>
        <li>Ollama</li>
        <li>Llama 3</li>
      </ul>
      <p>Demo repository:</p>
      <pre className="article-code"><code className="language-text">{`[Add your demo link here]`}</code></pre>
      <h2>Conclusion</h2>
      <p>LangChain became one of the most important frameworks in AI Engineering because it helps transform language models into real applications.</p>
      <p>The most important part is not only the model itself, but the architecture built around it.</p>
      <p>And this is exactly where LangChain adds value:</p>
      <ul>
        <li>orchestration</li>
        <li>retrieval</li>
        <li>memory</li>
        <li>tools</li>
        <li>agents</li>
        <li>workflows</li>
      </ul>
      <p>The future of software development will likely be deeply connected to AI Engineering, and frameworks like LangChain will play a major role in that evolution.</p>
    </ArticleLayout>
  );
};

export default LangChainPost;
