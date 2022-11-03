import { BaseCommandInteraction, Constants} from "discord.js";
import { ICommand } from "../icommand";

const rockPaperScissor: ICommand =
 {
    name: "rockpaperscissor",
    description: "Rock paper scissor game",
    options: [
        {
            name: "choice",
            description: "Choice to play",
            required: true,
            type: Constants.ApplicationCommandOptionTypes.STRING
        }
    ],

    execute: async (interaction: BaseCommandInteraction) => 
    {
        const choice = (interaction.options.get("choice")?.value as string).toLowerCase()
        
        //If the choice given is not a legit choice 
        if (choice != "rock" && choice != "paper" && choice != "scissor")
        {
            await interaction.reply ("Not a valid choice")
            return
        }
        
        const botChoice = Math.floor(Math.random()* 3) + 1 
       
        //If bot's choice is one then it's rock
        if (botChoice  == 1)
        {
            if (choice == "rock")
            {
                await interaction.reply("Bot chose rock. It's a tie!")
                return
            }

            if (choice == "scissor")
            {
                await interaction.reply("Bot chose rock. You lose!")
                return
            }

            if (choice == "paper")
            {
                await interaction.reply("Bot chose rock. You win!")
                return
            }
        }
        
        //If bot's choice is 2 it's scssiors
        if (botChoice  == 2)
        {
            if (choice == "rock")
            {
                await interaction.reply("Bot chose scissors. You win!")
                return
            }

            if (choice == "scissor")
            {
                await interaction.reply("Bot chose scissors. It's a tie!")
                return
            }

            if (choice == "paper")
            {
                await interaction.reply("Bot chose scissors. You lose!")
                return
            }
        }

        //If bot's choice is 3 it's paper
        if (botChoice  == 3)
        {
            if (choice == "rock")
            {
                await interaction.reply("Bot chose paper. You lose!")
                return
            }

            if (choice == "scissor")
            {
                await interaction.reply("Bot chose paper. You win!")
                return
            }

            if (choice == "paper")
            {
                await interaction.reply("Bot chose paper. It's a tie!")
                return
            }
        }
    }
}

export function getCommands(): ICommand[] 
{
    return [rockPaperScissor];
};
