using System;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

public class RageQuit
{
    public static void Main()
    {
        var input = Console.ReadLine().ToUpper();

        var regex = new Regex(@"(.*?)([0-9]+)");
        var matches = regex.Matches(input);
        var sb = new StringBuilder();

        foreach (Match match in matches)
        {
            var symbols = match.Groups[1].ToString();
            var count = int.Parse(match.Groups[2].ToString());
            for (int i = 0; i < count; i++)
            {
                sb.Append(symbols);
            }
        }

        var uniqueSymbols = sb.ToString().ToCharArray().Distinct().Count();
        Console.WriteLine($"Unique symbols used: {uniqueSymbols}");
        Console.WriteLine(sb);
    }
}

