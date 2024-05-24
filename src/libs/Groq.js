    import { Groq } from "groq-sdk";
    const PromptApi = import.meta.env.VITE_PROMPTAI;
    
    //class for chat Ai
    const Prompt = new Groq ({
        apiKey: PromptApi,
        dangerouslyAllowBrowser: true
    });

    // function get user input Ai
   export const requestprompt = async (content) => {
          const messagereply = await Prompt.chat.completions.create({
            messages: [{
                role: "user",
                content,
            }], 
              model: "llama3-8b-8192",
          })

          return messagereply.choices[0].message.content;
    }