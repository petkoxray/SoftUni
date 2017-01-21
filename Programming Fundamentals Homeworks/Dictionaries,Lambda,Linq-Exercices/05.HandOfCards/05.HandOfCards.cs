using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        string input = Console.ReadLine();
        var playerHands = new Dictionary<string, List<string>>();

        while (!input.Equals("JOKER"))
        {
            AddCards(input,playerHands);
            input = Console.ReadLine();
        }

        PrintCards(playerHands);
    }

    private static void PrintCards(Dictionary<string, List<string>> playerHands)
    {
        foreach (var player in playerHands)
        {
            long sum = GetResult(player.Value);
            Console.WriteLine($"{player.Key}: {sum}");
        }
    }

    private static long GetResult(List<string> playerHands)
    {
        long sum = 0;
        foreach (var hand in playerHands.Distinct())
        {
            string powerStr = hand.Substring(0, hand.Length - 1);
            int power = GetPower(powerStr);
            string rankStr = hand.Substring(hand.Length - 1);
            int rank = GetRank(rankStr);
            sum += rank * power;
        }

        return sum;
    }

    private static int GetRank(string rankStr)
    {
        int rank = 0;
        switch (rankStr)
        {
            case "S": rank = 4; break;
            case "H": rank = 3; break;
            case "D": rank = 2; break;
            case "C": rank = 1; break;
        }

        return rank;
    }

    private static int GetPower(string powerStr)
    {
        int power = 0;
        switch (powerStr)
        {
            case "1": power = 1; break;
            case "2": power = 2; break;
            case "3": power = 3; break;
            case "4": power = 4; break;
            case "5": power = 5; break;
            case "6": power = 6; break;
            case "7": power = 7; break;
            case "8": power = 8; break;
            case "9": power = 9; break;
            case "10": power = 10; break;
            case "J": power = 11; break;
            case "Q": power = 12; break;
            case "K": power = 13; break;
            case "A": power = 14; break;
        }

        return power;
    }

    private static void AddCards(string input, Dictionary<string, List<string>> playerHands)
    {
        var commandArr = input.Split(new char[] {':'}, StringSplitOptions.RemoveEmptyEntries);
        string playerName = commandArr[0];
        var playerCards = commandArr[1].Split(new char[] { ',',' '}, StringSplitOptions.RemoveEmptyEntries).ToList();
        if (playerHands.ContainsKey(playerName))
        {
            playerHands[playerName].AddRange(playerCards);
        }
        else
        {
            playerHands.Add(playerName, playerCards);
        }
    }
}

