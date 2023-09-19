# Telegram Chatbot with OpenAI Integration

This project provides a seamless integration of a Telegram chatbot with OpenAI's API. Users can interact with the chatbot directly from their Telegram app without the need for a web interface.

> **Note**: This app was developed before the launch of ChatGPT's mobile applications.

## Features

- **Telegram Integration**: Users can chat with the bot directly on Telegram.
- **OpenAI API**: The chatbot is powered by OpenAI's advanced language model, providing accurate and human-like responses.
- **Node.js & Express**: The backend is built using Node.js and Express, ensuring a robust and scalable solution.

## Prerequisites

- Node.js and npm installed
- Telegram Bot Token (from [BotFather](https://core.telegram.org/bots#botfather))
- OpenAI API Key

## Setup & Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Navigate to the project directory and install dependencies:
   ```bash
   cd <project-name>
   npm install

3. Create a .env file in the root directory and add the following:
   ```bash
         TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
    O      PENAI_API_KEY=YOUR_OPENAI_API_KEY

4. Start the server:
   ```bash
      node app.js

5. Your Telegram bot is now running and integrated with OpenAI! Start a conversation with your bot on Telegram.

## Usage

- **To interact with the chatbot, simply send a message to the bot on Telegram. The bot will process your message and respond using OpenAI's language model**.

