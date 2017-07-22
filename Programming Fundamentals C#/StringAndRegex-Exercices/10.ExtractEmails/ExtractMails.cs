using System;
using System.Text.RegularExpressions;

public class ExtractEmails
{
    public static void Main()
    {
        string pattern = @"(?:^|\s)([a-zA-Z0-9]+[a-zA-Z0-9\-_\.]*@[a-zA-Z0-9\-]+[\.a-zA-Z]*[\.][a-z]+)";
        Regex regex = new Regex(pattern);
        string input = Console.ReadLine();

        MatchCollection matches = regex.Matches(input);

        foreach (Match match in matches)
        {
            Console.WriteLine(match.Groups[1]);
        }
    }
}
