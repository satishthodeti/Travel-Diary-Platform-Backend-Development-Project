import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function main() {
  console.log(colors.bold.green('Welcome to the Chatbot Program!'));
  console.log(colors.bold.green('You can start chatting with the bot.'));

  const chatHistory = []; // Store conversation history

  while (true) {
    console.log(111111111111);

    try {
      // Construct messages by iterating over the history
      const messages = chatHistory.map(([role, content]) => ({
        role,
        content,
      }));
      console.log(222222222222222);

      // Add latest user input
      messages.push({ role: 'user', content: userInput });
      console.log(userInput);
      console.log(333333333333333);
      // Call the API with user input & history
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
      });
      console.log(444444444444444);
      // Get completion text/content
      const completionText = completion.data.choices[0].message.content;
      console.log(555555555555);
      if (userInput.toLowerCase() === 'exit') {
        console.log(colors.green('Bot: ') + completionText);
        return;
      }
      console.log(6666666666666666);
      console.log(colors.green('Bot: ') + completionText);

      // Update history with user input and assistant response
      chatHistory.push(['user', userInput]);
      chatHistory.push(['assistant', completionText]);
    } catch (error) {
      console.log("Error---------------------")
      console.error(colors.red(error));
    }
  }
}

module.exports = {}
