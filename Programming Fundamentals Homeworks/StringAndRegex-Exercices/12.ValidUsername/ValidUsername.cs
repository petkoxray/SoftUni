using System;
using System.Text.RegularExpressions;

public class ValidUsername
{
    public static void Main()
    {
        string input = Console.ReadLine();

        string pattern = @"(?<=[\s\\\/()]|^)[a-zA-Z]\w{2,24}(?=[\s\\\/()]|$)";
        var regex = new Regex(pattern);
        var matches = regex.Matches(input);

        int currLen = 0;
        int maxLen = 0;
        string firstUsername = "";
        string secondUsername = "";

        for (int username = 0; username < matches.Count - 1; username++)
        {
            currLen = matches[username].Length + matches[username + 1].Length;

            if (currLen > maxLen)
            {
                maxLen = currLen;
                firstUsername = matches[username].ToString();
                secondUsername = matches[username + 1].ToString();
            }
        }

        Console.WriteLine(firstUsername);
        Console.WriteLine(secondUsername);
    }
}