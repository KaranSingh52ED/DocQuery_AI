# Customizable PDF Q&A Tool Using Multiple LLMs

**Ask Questions About Any PDF Using a Local Python App with LLMs**

This project implements a Local Large Language Model (LLM) agent This is a Python tool that lets you ask questions about the content of a PDF. It uses different AI models (like Google's Gemini and OpenAI's GPT) to understand your questions and answer them based on what's in the document.

## Features

- **Read and Process PDFs:** It breaks your PDF into smaller chunks of text so AI can understand it.
- **Choose Your AI Model:** IYou can pick between Google Gemini or OpenAI GPT models.
- **Flexible Text Understanding:** Supports both Sentence Transformers and OpenAI embeddings for better understanding.
- **Fast Searching:** Uses FAISS to quickly find the most relevant parts of your document.
- **More Accurate Answers:** Uses a reranker model to improve how well the AI picks relevant information.
- **Easy to Use CLI:** Comes with a command-line interface to easily run the app with different settings.
- **JSON Structured Output:** PReturns the answers in a clean, readable JSON format.

## File Structure

```
llm-doc-agent/
├── .gitignore
├── README.md
├── run_agent.py        # CLI script with configurable LLM and embedding
├── requirements.txt    # Project dependencies
└── src/
    ├── __init__.py
    ├── config.py       # Configuration settings
    ├── document_processing/
    │   ├── __init__.py
    │   └── pdf_processor.py  # Handles PDF loading and chunking
    ├── embedding/
    │   ├── __init__.py
    │   └── embedding_models.py # Implements embedding models
    ├── llm/
    │   ├── __init__.py
    │   └── llm_agents.py     # Interfaces with LLM providers
    ├── question_answering/
    │   ├── __init__.py
    │   └── qa_agent.py       # Orchestrates question answering
    ├── retrieval/
    │   ├── __init__.py
    │   └── vector_store.py   # Implements the vector store
    └── utils/
        ├── __init__.py
        └── logger.py         # Sets up logging
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd autominds/llm-doc-agent
   ```

2. **Create and activate a virtual environment (recommended):**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Linux/macOS
   venv\Scripts\activate  # On Windows
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## Configuration

1. **Environment Variables:** The application relies on environment variables for API keys and other settings. You can create a `.env` file in the project's root directory and populate it with the necessary values. Example `.env` file:

   ```env
   GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
   OPENAI_API_KEY="YOUR_OPENAI_API_KEY"
   EMBEDDING_MODEL_NAME="sentence-transformers/all-MiniLM-L6-v2"
   OPENAI_EMBEDDING_MODEL_NAME="text-embedding-3-large"
   LLM_MODEL_NAME="gemini-1.5-flash"
   OPENAI_LLM_MODEL_NAME="gpt-4o-mini"
   RERANKER_MODEL_NAME="cross-encoder/ms-marco-MiniLM-L-12-v2"
   PDF_PATH="documents/test.pdf"
   ```

   **Note:**

   - Obtain your API keys from Google AI Studio for Gemini and OpenAI Platform for OpenAI.
   - You can customize the model names and default PDF path in the `.env` file.

## How to Use It:

The primary way to run the application is through the `run_agent.py` script, which provides a flexible command-line interface.

```bash
python run_agent.py --help
```

This will display the available command-line options:

```
usage: run_agent.py [-h] [--pdf_path PDF_PATH]
                    [--llm_model {gemini,openai}]
                    [--embedding_model {sentence-transformers,openai}]
                    [--questions QUESTIONS] [--questions_file QUESTIONS_FILE]

LLM Agent PDF Reader CLI

options:
  -h, --help            show this help message and exit
  --pdf_path PDF_PATH   Path to the PDF file.
  --llm_model {gemini,openai}
                        Choose the LLM model (gemini or openai).
  --embedding_model {sentence-transformers,openai}
                        Choose the embedding model (sentence-transformers or
                        openai).
  --questions QUESTIONS
                        Semicolon-separated string of questions.
  --questions_file QUESTIONS_FILE
                        Path to a file containing questions (one question per
                        line).
```

**Examples:**

- **Run with default settings (uses Gemini and default questions):**

  ```bash
  python run_agent.py
  ```

- **Specify a PDF file:**

  ```bash
  python run_agent.py --pdf_path path/to/your/document.pdf
  ```

- **Use OpenAI as the LLM:**

  ```bash
  python run_agent.py --llm_model openai
  ```

- **Use OpenAI for embeddings:**

  ```bash
  python run_agent.py --embedding_model openai
  ```

- **Provide questions directly:**

  ```bash
  python run_agent.py --questions "What are the key benefits?, Explain the company culture."
  ```

- **Read questions from a file:**

  ```bash
  python run_agent.py --questions_file my_questions.txt
  ```

- **Combine options:**
  ```bash
  python3 run_agent.py --pdf_path another_document.pdf --llm_model openai --embedding_model openai --questions "What is the remote work policy?"
  ```

## Due to Some token Limitations this bounded under some restriction , please use you paid api keys for best outputs.
